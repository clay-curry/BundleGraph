import * as React from 'react';
import Header from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function AppBar() {
  
    const Bar = React.memo(function ({ children, ...props }: { children?: React.ReactNode }) {
      return <Header position="static" color='secondary' sx={{}}>
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
      </Header>
    })
  
    return (
      <Bar />
          
    );
  }
  
  