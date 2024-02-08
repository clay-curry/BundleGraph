import { Metadata } from 'next';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';

export const config: Metadata = {
  // This layout is a root layout so it will be used for all pages
  // that don't have a layout in their frontmatter.
  title: 'Dynapack',
  description: 'Dynapack is a dynamic bundle analysis toolkit for modern static module bundlers.'
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssVarsProvider disableTransitionOnChange>
            <CssBaseline />
            <Stack
              id="tab-bar"
              direction="row"
              justifyContent="space-around"
              spacing={1}
              sx={{
                display: { xs: 'flex', sm: 'none' },
                zIndex: '999',
                bottom: 0,
                position: 'fixed',
                width: '100dvw',
                py: 2,
                backgroundColor: 'background.body',
                borderTop: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Button
                variant="plain"
                color="neutral"
                component="a"
                href="/email/"
                size="sm"
                startDecorator={<EmailRoundedIcon />}
                sx={{ flexDirection: 'column', '--Button-gap': 0 }}
              >
                Email
              </Button>
              <Button
                variant="plain"
                color="neutral"
                component="a"
                href="/team/"
                size="sm"
                startDecorator={<PeopleAltRoundedIcon />}
                sx={{ flexDirection: 'column', '--Button-gap': 0 }}
              >
                Team
              </Button>
              <Button
                variant="plain"
                color="neutral"
                aria-pressed="true"
                component="a"
                href="/files/"
                size="sm"
                startDecorator={<FolderRoundedIcon />}
                sx={{ flexDirection: 'column', '--Button-gap': 0 }}
              >
                Files
              </Button>
            </Stack>



            {props.children}
          
          </CssVarsProvider>  
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

