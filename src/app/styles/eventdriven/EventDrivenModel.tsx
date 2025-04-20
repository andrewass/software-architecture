import { ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const nodes = [
  {
    id: "1",
    type: "input",
    sourcePosition: "right",
    position: { x: 50, y: 50 },
    data: { label: "First producer" },
  },
  {
    id: "2",
    type: "input",
    sourcePosition: "right",
    position: { x: 50, y: 150 },
    data: { label: "Second producer" },
  },
  {
    id: "3",
    type: "input",
    sourcePosition: "right",
    position: { x: 50, y: 250 },
    data: { label: "Third producer" },
  },
  {
    id: "4",
    sourcePosition: "right",
    targetPosition: "left",
    position: { x: 300, y: 150 },
    data: { label: "Event broker" },
  },
  {
    id: "5",
    type: "output",
    targetPosition: "left",
    position: { x: 550, y: 50 },
    data: { label: "First consumer" },
  },
  {
    id: "6",
    type: "output",
    targetPosition: "left",
    position: { x: 550, y: 150 },
    data: { label: "Second consumer" },
  },
  {
    id: "7",
    type: "output",
    targetPosition: "left",
    position: { x: 550, y: 250 },
    data: { label: "Third consumer" },
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
        colorMode="dark"
        nodes={nodes}
        edges={initialEdges}
        className="bg-gray-900"
      />
    </div>
  );
}
