"use client"

import * as React from 'react';

import Link from 'next/link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import MailIcon from '@mui/icons-material/Mail';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';


function TabGroup() {
  return <Stack className="hidden md:flex flex-col w-[88px] mt-6 bg-color-[background.paper]">

    <Link href="/webpack-viz" className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full">

    </Link>
    <Link href="source-map">

    </Link>
    <Button variant="contained">Contained</Button>
    <Button variant="contained" disabled>
      Disabled
    </Button>
    <Button variant="contained" href="#contained-buttons">
      Link
    </Button>
  </Stack>
}


type Anchor = 'top' | 'left' | 'bottom' | 'right';

export function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}


export interface NavButtonProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

function NavRail(
  {
    link,
    ...props
  }: { link: NavButtonProps }
): React.ReactElement {
  const { href, label, icon } = link;
  return (
    <Link {...props}
      href={href}
      className={"flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full"}
      area-label={label}
      role="button"
    >
      <span>
        {icon}
      </span>
      <div>
        {label}
      </div>
    </Link>
  )
}

export default function SideNav({ links, ...props }: { links: NavButtonProps[] }) {

  return (
    <nav>
      <Stack
        className="hidden md:flex flex-col w-[88px] mt-6 bg-color-[background.paper]"
      >

        {
          links.length > 0 && links.map(
            (link: NavButtonProps, index) => (
              <NavRail key={index} link={link} {...props} />
            )
          )
        }
      </Stack>
      <Stack
        className="flex md:hidden"
      >
      </Stack>
    </nav>

  );
}

