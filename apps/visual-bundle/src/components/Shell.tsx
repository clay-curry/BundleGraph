import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material-next/Button';
import Stack from '@mui/material/Stack';
import MenuIcon from '@mui/icons-material/Menu';
import FingerprintIcon from '@mui/icons-material/Fingerprint';

const railButtons = [
  'concepts',
  'instrumentation',
  'telemetry',
  'architecture',
  'plugins',
] 

interface WebpackProperty {
  text: string;
  icon: React.ReactNode;
}

const compilation: WebpackProperty[] = [
  { text: 'Entry', icon: <FingerprintIcon width={32} height={64} /> },
  { text: 'Output', icon: <FingerprintIcon /> },
  { text: 'Loaders', icon: <FingerprintIcon /> },
  { text: 'Plugins', icon: <FingerprintIcon /> },
  { text: 'Modules', icon: <FingerprintIcon /> },
  { text: 'Chunks', icon: <FingerprintIcon /> },
  { text: 'Bundles', icon: <FingerprintIcon /> }
];

const instrumentation = [
  ''
]


export function Header({ setIsDrawerOpen }: { setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  
  const Bar = React.memo(function ({ children, ...props }: { children?: React.ReactNode }) {
    return <AppBar position="static" color='secondary' sx={{}}>
      <Toolbar>
        {children}
        <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        
        >
          <img src='./favicon.png' alt="logo" width={32} height={32}  />
        <Typography
          noWrap
          component="h1"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontSize: 28, fontWeight: '700' }}
        >
          Dynapack
        </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  })
  
  const StateHandler = (state: boolean) => (
        <IconButton
              onClick={() => setIsDrawerOpen(true)}
              size="large"
              edge="start"
              aria-label="open drawer"
              sx={{ 
                mr: 2,
                size: 32,
               }}
        >
          <MenuIcon />
        </IconButton>
  )
  
  return (
    <Bar />
        
  );
}


export interface  SideBarProps {
  isDrawerOpen: boolean,
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
}


export function NavigationDrawer(props: SideBarProps){
  return <Stack
  component="nav"
  color=""
  mt={2}
  
  sx={{ height: '100%', marginBottom: 'auto', display: 'flex', flexDirection: 'column', overflow: 'hidden', width: 80, flexShrink: 0}}
>
  {compilation.map(({...p}, index) => (
    <RailButton key={index} text={p.text} icon={p.icon}  />
  ))}
  
</Stack>
}

function RailButton({ text, icon, ...props }: { text: string, icon: React.ReactNode }) {
  return (
    <Button
      color="secondary"
      sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'flex-middle' }}
    >
      {icon}
      <Typography sx={{ fontSize: 10 }} >
          {text}
    </Typography>
    </Button>
  )

}