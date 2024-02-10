import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { CssVarsProvider }  from '@mui/material-next/styles';
import { NavigationDrawer, Header, SideBarProps } from './components/Shell';

const rootElement = document.body;
const root = ReactDOM.createRoot(rootElement!);

root.render(
   <App />
);


export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  
  return (
    <CssVarsProvider>    
      <Header setIsDrawerOpen={setIsDrawerOpen} />
      <NavigationDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}  />
    </CssVarsProvider>
  )
};