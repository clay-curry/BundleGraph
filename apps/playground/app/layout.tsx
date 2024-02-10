import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from '@/theme';
import AppBar from './appbar';

const related = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/bundler',
    label: 'Bundle Analyzer',
  },
  {
    href: '/source-map',
    label: 'Source Map Vieweer',
  },
  {
    href: 'https://ts-ast-viewer.com/',
    label: 'TypeScript AST Viewer',
  },
  {
    href: 'https://swc-css.netlify.app/',
    label: 'SWC CSS Playground',
  },
  {
    href: 'https://swc.rs/playground',
    label: 'SWC Playground',
  }
];

const actions = [
  {
    section: "Dynapack",
    items: [
      { href: "/gettign-started", label: "Getting Started" },
      { href: "/bundler", label: "Bundle Analyzer" },
      { href: "/source-map", label: "Source Map" },
      { href: "/ast", label: "AST Viewer" },
      {
        section: "Getting Started"
      }
    ],
  },
]


export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" className={"min-h-full min-w-full"}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <AppBar />
            {props.children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
