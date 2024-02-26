"use client"
import "material-symbols"
import Link from "next/link";
import React, { useState } from "react"
import { Open_Sans } from 'next/font/google'
import { usePathname } from "next/navigation"; 

import { twMerge } from "tailwind-merge"
import { clsx, type ClassValue } from "clsx"
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';


const font = Open_Sans({
    weight: '400',
    style: 'normal',
    display: 'swap',
    subsets: ['latin']
})

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

const ColorPaletteIcon = ({className, ...props}: { className?: string }) => (
    <div className={cn(className, "material-symbols-outlined text-black")}>
        palette
    </div>
)

export default function ThemeControls() {
    const [isOpen, setIsOpen] = useState(false);

    return (<DropdownMenu.Root>
    <DropdownMenu.Trigger asChild>
        <button className="rounded-full w-[45px] h-[45px] inline-flex items-center justify-center text-violet11 bg-white shadow-[0_0px_1px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black" aria-label="Customise color theme">
            <ColorPaletteIcon />
        </button>
    </DropdownMenu.Trigger>

    <DropdownMenu.Portal>
        <DropdownMenu.Content className={"absolute flex flex-col translate-x-[-100%] justify-center items-center text-[16px] bg-[rgb(234,224,226)] h-[572px] w-[256px] pt-2 [--radix-dropdown-menu-trigger-width:24px] [--radix-dropdown-menu-trigger-height:24px] transition delay-150 duration-600 ease-in-out data-[state=open]:animate-bounce" + font.className}>
            <DropdownMenu.Label asChild >
            <div className="flex flex-row justify-between w-[224px] h-[24px] mb-4">
                <h2 className="text-[24px] font-bold text-center h-6"> Theme Controls </h2>
                <button className="size-10">
                    <span className="material-symbols-outlined size-6" aria-hidden>content_copy</span>
                </button>
            </div>
            </DropdownMenu.Label>

        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>
              <div className="flex flex-row place-items-center justify-between w-[224px] h-[72px] mb-[16px] p-3 border-2 border-solid border-black rounded-2xl">
                <div className="text-[16px]">
                    Hex Source Color
                </div>
                <svg width="46" height="46">
                    <circle cx="23" cy="23" r="20" fill="none" stroke="black" strokeWidth="2" />
                </svg>

              </div>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent data-side='left'>
                <DropdownMenu.Item >
                    {/** eyedropper api */}
                </DropdownMenu.Item>
              </DropdownMenu.SubContent>
              
            </DropdownMenu.Portal>
            
        </DropdownMenu.Sub>

        <DropdownMenu.Label asChild>
            <div className="w-[224px] h-[348px] border-2 border-solid border-black rounded-2xl px-3 mb-4" >
            <div className="w-[200px] h-[84px] my-6 text-[16px]" >
                    Hue
                </div>
                <div className="w-[200px] h-[84px] my-6 text-[16px]" >
                    Chroma
                </div>
                <div className="w-[200px] h-[84px] my-6 text-[16px]" >
                    Tone
                </div>
            </div>
        </DropdownMenu.Label>

        <DropdownMenu.Label asChild>
            <div className="w-[224px] h-[40px] flex flex-row justify-between border-2 border-solid border-black rounded-2xl " >
                <button>
                    <span className="material-symbols-outlined" aria-hidden>dark_mode</span>
                </button>
                <button>
                    <span className="material-symbols-outlined" aria-hidden>brightness_medium</span>
                </button>
                <button>
                    <span className="material-symbols-outlined" aria-hidden>light_mode</span>
                </button>
            </div>
        </DropdownMenu.Label>

      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
  )

}

export function NavigationRail() {
  const path = usePathname();
  const isExpanded = path.startsWith('/playground');


const destinations = [
    {
      name: "Bundle",
      target: "/bundle",
      icon: 'lan'
    },
    {
      name: 'Debundle',
      target: "/debundle",
      icon: 'diversity_2',
    },
    {
      name: "Instrument",
      target: "/refactor",
      icon: 'query_stats'
    },
    {
      name: 'Federation',
      target: "/module-federation",
      icon: 'sync_lock'
    },
  ]
  const modes = [
    {
      name: "Learn",
      target: "/playground/learn",
      icon: 'query_stats'
    },
    {
      name: 'Analyze',
      target: "/playground/analyze",
      icon: 'diversity_2',
    },
    {
      name: 'Refactor',
      target: "/playground/refactor",
      icon: 'sync_lock'
    },
    {
      name: "Optimize",
      target: "/playground/optimize",
      icon: 'lan'
    },
  ]


  const NavButtons = (
    <nav aria-expanded={isExpanded} className="flex flex-col gap-6 w-20 aria-expanded:translate-y-[40px] [delay:600ms] transition ease-in-out duration-700">
    <Link className='h-[56px] w-full flex flex-col gap-1 text-center' href="/">
          <div className='h-[32px] transition ease-in-out duration-300 mx-2 hover:border-solid border-2 border-black rounded-2xl text-center'>
            <span className="material-symbols-outlined transition ease-in-out [animation-delay:600ms] hover:scale-[1.15] duration-700 [font-variation-settings:'FILL'_0,'wght'_200,'GRAD'_500,'opsz'_0] hover:[font-variation-settings:'FILL'_0,'wght'_400,'GRAD'_500,'opsz'_0] translate-y-[3px]" aria-hidden>home</span>
      </div>
      <p>Home</p>
    </Link>

    <Link className='h-[56px] w-full flex flex-col gap-1 text-center' href="/playground">
      <div className='h-[32px] transition ease-in-out duration-300 mx-2 hover:border-solid border-2 border-black rounded-2xl text-center'>
        <span className="material-symbols-outlined transition ease-in-out [animation-delay:600ms] hover:scale-[1.15] duration-700 [font-variation-settings:'FILL'_0,'wght'_200,'GRAD'_500,'opsz'_0] hover:[font-variation-settings:'FILL'_0,'wght'_400,'GRAD'_500,'opsz'_0] translate-y-[3px]" aria-hidden>toys_fan</span>
      </div>
      <p>Playground</p>
    </Link>


    {modes.map(
      (destination, index) => (
        <Link aria-expanded={isExpanded} className='h-[56px] w-full flex flex-col gap-1 text-center' href={destination.target} key={index}>
          <div className='h-[32px] transition ease-in-out duration-300 mx-2 hover:border-solid border-2 border-black rounded-2xl text-center'>
            <span className="material-symbols-outlined transition ease-in-out [animation-delay:600ms] hover:scale-[1.15] duration-300 [font-variation-settings:'FILL'_0,'wght'_200,'GRAD'_500,'opsz'_0] hover:[font-variation-settings:'FILL'_0,'wght'_400,'GRAD'_500,'opsz'_0] translate-y-[3px]">{destination.icon}</span>
          </div>
          <p>{destination.name}</p>
        </Link>
        )
      )
    }

    </nav>
  )

  const toggleRef = React.createRef<HTMLButtonElement>();


  return (
    <aside
      aria-expanded={isExpanded}
      className={
        cn(
          "fixed top-0 left-0 text-xs h-dvh w-[80px] flex flex-col justify-between items-center pt-10 pb-6 bg-white shadow-[0_1px_2px] border-r-[1px] border-solid border-black",
          "border-r-[1px] border-solid border-black",
          "")}>
      {NavButtons}
      <ThemeControls />
    </aside>
  )
}


export function AppBar(){
  const pathname = usePathname();
  const isExpanded = pathname.startsWith('/playground');

  return (<>

  <header aria-expanded={isExpanded} className='fixed top-[-60px] left-0 w-[100dvw] h-[60px] bg-white shadow-[0_1px_2px] transition ease-in-out duration-[1100] aria-expanded:translate-y-full'>      
    <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold">BundleGraph</h1>
        </div>
        <div className="flex items-center gap-4">
        </div>
      </div>
    </header>
    </>
  )
}

export function BodyWrapper({children, ...props}: {children: React.ReactNode}) {
  const pathname = usePathname();
  const isExpanded = pathname.startsWith('/playground');
  if (isExpanded) {
    return (<div className="ml-[80px] mt-[60px] w-[100%] h-[100%]">
      {children}
    </div>
    )
  }
  
  return (<div className="ml-[80px] w-[100%] h-full">
    {children}
  </div>
  )
}