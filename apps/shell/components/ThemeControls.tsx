"use client"

import React, { useState } from "react"
import { twMerge } from "tailwind-merge"
import { clsx, type ClassValue } from "clsx"
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';


import { Open_Sans } from 'next/font/google'

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
        <button className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-white shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black" aria-label="Customise color theme">
            <ColorPaletteIcon />
        </button>
    </DropdownMenu.Trigger>

    <DropdownMenu.Portal>
        <DropdownMenu.Content className={"absolute flex flex-col translate-x-[-100%] justify-center items-center text-[16px] bg-[rgb(234,224,226)] h-[572px] w-[256px] pt-2 [--radix-dropdown-menu-trigger-width:24px] [--radix-dropdown-menu-trigger-height:24px] transition delay-150 duration-100 ease-in-out data-[state=open]:animate-bounce" + font.className}>
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