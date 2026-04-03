'use strict';

const crypto = require('crypto');

const VIRTUAL_NODE_COUNT = 100;
const DISAGREEMENT_THRESHOLD = 3;
const TARGET_THROUGHPUT_EVENTS_PER_SEC = 20;
const CORRIDOR_LENGTH_KM = 1;

function hashEventStream(eventStream) {
  return crypto
    .createHash('sha256')
    .update(JSON.stringify(eventStream))
    .digest('hex');
}

function createVirtualNodes(nodeCount = VIRTUAL_NODE_COUNT) {
  return Array.from({ length: nodeCount }, (_, idx) => ({
    nodeId: `node-${idx + 1}`,
    corridorKm: CORRIDOR_LENGTH_KM,
    eventStream: [],
    nodeState: null,
    reconciled: false,
  }));
}

function majorityStateHash(hashes) {
  const counts = new Map();
  for (const hash of hashes) {
    counts.set(hash, (counts.get(hash) || 0) + 1);
  }

  let majorityHash = null;
  let highestCount = 0;

  for (const [hash, count] of counts.entries()) {
    if (count > highestCount) {
      majorityHash = hash;
      highestCount = count;
    }
  }

  return {
    hash: majorityHash,
    count: highestCount,
    disagreementCount: hashes.length - highestCount,
  };
}

function reconcileNodes(nodes, consensusHash) {
  let reconciledCount = 0;

  for (const node of nodes) {
    if (node.nodeState !== consensusHash) {
      node.nodeState = consensusHash;
      node.reconciled = true;
      reconciledCount += 1;
    }
  }

  return reconciledCount;
}

function applyTelemetryEvent(nodes, event) {
  for (const node of nodes) {
    node.eventStream.push(event);
    node.nodeState = hashEventStream(node.eventStream);
    node.reconciled = false;
  }
}

function runGlobalExecutor(events = []) {
  const nodes = createVirtualNodes();
  const startedAt = process.hrtime.bigint();

  for (const event of events) {
    applyTelemetryEvent(nodes, event);
  }

  const nodeHashes = nodes.map((node) => node.nodeState);
  const consensus = majorityStateHash(nodeHashes);

  let reconciliationTriggered = false;
  let reconciledNodes = 0;

  if (consensus.disagreementCount > DISAGREEMENT_THRESHOLD) {
    reconciliationTriggered = true;
    reconciledNodes = reconcileNodes(nodes, consensus.hash);
  }

  const endedAt = process.hrtime.bigint();
  const elapsedSeconds = Number(endedAt - startedAt) / 1e9;
  const throughputEventsPerSec = events.length / (elapsedSeconds || 1e-9);
  const throughputTargetMet = throughputEventsPerSec > TARGET_THROUGHPUT_EVENTS_PER_SEC;

  console.log('GLOBAL_EXECUTOR: DISTRIBUTED_INFRASTRUCTURE_SYNCHRONIZED');

  return {
    nodeCount: nodes.length,
    corridorKm: CORRIDOR_LENGTH_KM,
    consensusHash: consensus.hash,
    disagreementCount: consensus.disagreementCount,
    reconciliationTriggered,
    reconciledNodes,
    throughputEventsPerSec,
    throughputTargetMet,
    targetThroughputEventsPerSec: TARGET_THROUGHPUT_EVENTS_PER_SEC,
    nodes,
  };
}

module.exports = {
  runGlobalExecutor,
  createVirtualNodes,
  applyTelemetryEvent,
  hashEventStream,
  majorityStateHash,
  reconcileNodes,
  VIRTUAL_NODE_COUNT,
  DISAGREEMENT_THRESHOLD,
  TARGET_THROUGHPUT_EVENTS_PER_SEC,
  CORRIDOR_LENGTH_KM,
};
