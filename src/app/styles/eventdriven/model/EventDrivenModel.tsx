"use client";

import { ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {
  EventBrokerNode,
  EventConsumerNode,
  EventProducerNode,
} from "@/app/styles/eventdriven/model/EventDrivenModelComponents";

const nodeTypes = {
  eventProducer: EventProducerNode,
  eventBroker: EventBrokerNode,
  eventConsumer: EventConsumerNode,
};

const nodes = [
  {
    id: "1",
    type: "eventProducer",
    position: { x: 50, y: 50 },
    data: {
      label: "First producer",
      description: "This is the first producer",
    },
  },
  {
    id: "2",
    type: "eventProducer",
    position: { x: 50, y: 150 },
    data: {
      label: "Second producer",
      description: "This is the second producer",
    },
  },
  {
    id: "3",
    type: "eventProducer",
    position: { x: 50, y: 250 },
    data: {
      label: "Third producer",
      description: "This is the third producer",
    },
  },
  {
    id: "4",
    type: "eventBroker",
    position: { x: 300, y: 150 },
    data: { label: "Event broker", description: "This is the event broker" },
  },
  {
    id: "5",
    type: "eventConsumer",
    position: { x: 550, y: 50 },
    data: {
      label: "First consumer",
      description: "This is the first consumer",
    },
  },
  {
    id: "6",
    type: "eventConsumer",
    position: { x: 550, y: 150 },
    data: {
      label: "Second consumer",
      description: "This is the second consumer",
    },
  },
  {
    id: "7",
    type: "eventConsumer",
    position: { x: 550, y: 250 },
    data: {
      label: "Third consumer",
      description: "This is the third consumer",
    },
  },
];
const initialEdges = [
  { id: "e1-4", type: "straight", source: "1", target: "4", animated: true },
  { id: "e2-4", type: "straight", source: "2", target: "4", animated: true },
  { id: "e3-4", type: "straight", source: "3", target: "4", animated: true },
  { id: "e4-5", type: "straight", source: "4", target: "5", animated: true },
  { id: "e4-6", type: "straight", source: "4", target: "6", animated: true },
  { id: "e4-7", type: "straight", source: "4", target: "7", animated: true },
];

export default function EventDrivenModel() {
  return (
    <div className="h-90 w-200">
      <ReactFlow
        fitView
        colorMode="dark"
        nodes={nodes}
        nodeTypes={nodeTypes}
        edges={initialEdges}
      />
    </div>
  );
}
