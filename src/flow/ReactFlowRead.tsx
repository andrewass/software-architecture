import { Edge, NodeTypes, Node, ReactFlow } from "@xyflow/react";

interface Props {
  nodes?: Node[] | undefined;
  nodeTypes?: NodeTypes | undefined;
  edges?: Edge[] | undefined;
}

export default function ReactFlowRead({ nodes, nodeTypes, edges }: Props) {
  return (
    <ReactFlow
      nodesDraggable={false}
      nodesConnectable={false}
      zoomOnScroll={false}
      zoomOnPinch={false}
      panOnScroll={false}
      panOnDrag={false}
      disableKeyboardA11y={true}
      nodes={nodes}
      nodeTypes={nodeTypes}
      edges={edges}
    />
  );
}
