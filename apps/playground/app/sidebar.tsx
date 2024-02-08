"use client"

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link';

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


export default function SideBar() {
  return (
    <Stack className='w-[88px] l-0 h-dvu space-between fixed h-full overflow-y-auto z-[8]'>
      <TabGroup />
    </Stack>
  )
}