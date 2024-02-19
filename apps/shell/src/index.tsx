import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { CssVarsProvider }  from '@mui/material-next/styles';
import RailDrawer from './components/Shell';

import AppBar from './components/AppBar';

const rootElement = document.body;
ReactDOM.createRoot(rootElement!).render(
   <App />
);

export default function App() {
  return (
    <CssVarsProvider>    
      <AppBar />
      <RailDrawer />
    </CssVarsProvider>
  )
};