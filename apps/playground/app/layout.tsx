
import '@/styles/globals.css'
import SideBar from './sidebar';
import theme from '@/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dynapack',
  description: 'Dynapack is a dynamic bundle analyzer for modern static module bundlers.',
  keywords: [
    'program analysis',
    'webpack',
    'turbopack',
    'esbuild'
  ]
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            
        <div className='flex w-full'>
            <div className='absolute r-0'>
              {props.children}
            </div>
        </div>

          </ThemeProvider>
      </body>
    </html>
  );
}
