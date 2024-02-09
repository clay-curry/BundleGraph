import '@/styles/globals.css';
import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';

import SideNav, { NavButtonProps } from './sidenav';
import Header from './header';



const links: NavButtonProps[] = [
  {
    label: 'Source Map',
    href: '/source-map',
    icon: <svg />
  },
  {
    label: 'Bundler',
    href: '/bundler',
    icon: <svg />
  }
]


export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='flex h-full'>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
      <CssBaseline />

          <Header />
          <SideNav links={links} />
          <main className='w-auto'>
          {props.children}
          </main>

      </ThemeProvider>
      </AppRouterCacheProvider>
      </body>
    </html>
  );
};
