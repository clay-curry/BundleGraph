"use client";

import * as React from 'react';
import TopBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import NextLink from 'next/link';
import MuiLink from '@mui/material/Link';
import Header from '@mui/material/AppBar';
import Stack from  '@mui/material/Stack';


const Link = ({children, href, ...props}: { children: React.ReactNode, href: string}
  ) => <MuiLink href={href} {...props } component={NextLink} > {children}</MuiLink>;

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
  
  