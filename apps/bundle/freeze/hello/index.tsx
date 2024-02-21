
import 'reactflow/dist/style.css';
import './text-updater-node.css';


import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
ReactDOM.createRoot(document.body!).render(
  <div>
    <Flow />
  </div>
);

import ReactFlow, {
  Node, 
  Edge,
  Controls,
  Background,
  NodeChange,
  EdgeChange,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from 'reactflow';
import TextUpdaterNode from './TextUpdaterNode';


const initialEdges: Edge[] = [
  { id: 'edge-1', source: 'node-1', sourceHandle: 'a', target: 'node-2' },
  { id: 'edge-2', source: 'node-1', sourceHandle: 'b', target: 'node-3' },
];


const initialNodes: Node[] = [
  {
    id: 'node-2',
    position: { x: 200, y: 100 },
    data: { label: 'Hello' },
    type: 'output',
  },
  {
    id: 'node-3',
    position: { x: 550, y: 250 },
    data: { label: 'World' },
    type: 'output',
  },
  {
    id: 'node-1',
    type: 'textUpdater',
    position: { x: 300, y: 0 },
    data: { value: 123 },
  },
];


function Flow() {
  const [nodes, setNodes] = React.useState(initialNodes);
  const [edges, setEdges] = React.useState(initialEdges);
  const nodeTypes = React.useMemo(() => ({ textUpdater: TextUpdaterNode }), []);
 
  const onNodesChange = React.useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );
  const onEdgesChange = React.useCallback(
    (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );
  const onConnect = React.useCallback(
    (params: Edge) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      edges={edges}
      onEdgesChange={onEdgesChange}
      // BUG: TypeScript compilation fails on { "allowSyntheticDefaultImports": true }
      // JavaScript works as expected
      onConnect={onConnect}
      fitView
    >  
      <Controls />
    </ReactFlow>
  );
};
