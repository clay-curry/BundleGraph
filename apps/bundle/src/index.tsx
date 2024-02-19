import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

const rootElement = document.body;
ReactDOM.createRoot(rootElement!).render(
   <App />
);

export default function App() {
  return (
    <div>
      <h1>Bundle</h1>
    </div>
  )
};