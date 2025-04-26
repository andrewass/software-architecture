"use client";

import { Handle, Node, NodeProps, Position } from "@xyflow/react";

type EventDrivenNode = Node<
  { description: string; label: string },
  "eventProducer" | "eventBroker" | "eventConsumer"
>;

export function EventProducerNode({ data }: NodeProps<EventDrivenNode>) {
  return (
    <div className="card bg-base-100 rounded-lg shadow-lg">
      <div className="bg-primary text-primary-content rounded-t-lg p-2">
        {data.label}
      </div>
      <div className="p-2">{data.description}</div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

export function EventBrokerNode({ data }: NodeProps<EventDrivenNode>) {
  return (
    <div className="card bg-base-100 rounded-lg shadow-lg">
      <div className="bg-primary text-primary-content rounded-t-lg p-2">
        {data.label}
      </div>
      <div className="p-2">{data.description}</div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

export function EventConsumerNode({ data }: NodeProps<EventDrivenNode>) {
  return (
    <div className="card bg-base-100 rounded-lg shadow-lg">
      <div className="bg-primary text-primary-content rounded-t-lg p-2">
        {data.label}
      </div>
      <div className="p-2">{data.description}</div>
      <Handle type="target" position={Position.Left} />
    </div>
  );
}
