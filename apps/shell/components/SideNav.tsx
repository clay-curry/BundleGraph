"use client"
import "material-symbols"
import * as Accordion from '@radix-ui/react-accordion';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import { twMerge } from "tailwind-merge"
import { clsx, type ClassValue } from "clsx"
import { usePathname } from "next/navigation"; 
import React, { createRef, Ref, useState } from 'react';

import Link from "next/link";
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

const CaretDownIcon = ({className, ...props}: { className?: string }) => <span {...props} className={ cn("material-symbols-outlined", className) }>expand_more</span>

export function NavigationRail() {
  const path = usePathname();
  const isExpanded = path != '/playground';


const destinations = [
    {
        name: "Home",
        target: "/",
        icon: 'home'
    },
    {
      name: "Tuning",
      target: "/analytics",
      icon: 'query_stats'
    },
    {
        name: "Collectors",
        target: "/collectors",
        icon: 'lan'
    },
    {
      name: 'Experiments',
      target: "/experiments",
        icon: 'labs',
      },
      {
      name: 'Federations',
      target: "/module-federation",
      icon: 'sync_lock'
    },
    {
        name: "Playground",
        target: "/playground",
        icon: 'toys_fan'
    },
  ]

  const NavButtons = (
    <nav aria-expanded={isExpanded} className="flex flex-col gap-6 w-20 aria-expanded:translate-y-[40px] [delay:600ms] transition ease-in-out duration-500">
    {destinations.map(
      (destination, index) => (
        <Link className='h-[56px] w-full flex flex-col gap-1 text-center' href={destination.target} key={index}>
          <div className='h-[32px] transition ease-in-out duration-300 mx-2 hover:border-solid border-2 border-black rounded-2xl text-center'>
            <span className="material-symbols-outlined transition ease-in-out [animation-delay:600ms] hover:scale-[1.15] duration-300 [font-variation-settings:'FILL'_0,'wght'_200,'GRAD'_500,'opsz'_0] hover:[font-variation-settings:'FILL'_0,'wght'_400,'GRAD'_500,'opsz'_0] translate-y-[3px]" aria-hidden>{destination.icon}</span>
          </div>
          <p>{destination.name}</p>
        </Link>
        )
      )
    }
    </nav>
  )

  const toggleRef = React.createRef<HTMLButtonElement>();
  
  React.useEffect(() => {
      function handleThemeToggle() {
          // On page load or when changing themes, best to add inline in `head` to avoid FOUC
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.body.querySelector('.root')?.classList.add('dark')
          } else {
              document.body.querySelector('.root')?.classList.remove('dark')
          }
  
          // Whenever the user explicitly chooses light mode
          // localStorage.theme = 'light'
  
          // Whenever the user explicitly chooses dark mode
          // localStorage.theme = 'dark'
  
          // Whenever the user explicitly chooses to respect the OS preference
          //localStorage.removeItem('theme')
  
          if (localStorage.theme == 'dark') {
              localStorage.theme = 'light'
          }
          else {
              localStorage.theme = 'dark'
          }
  
      }
  
      // Bind the event listener
      const themeToggler = document.querySelector("#theme-toggler");
      themeToggler?.addEventListener("click", handleThemeToggle);
  
      return () => {
          // Unbind the event listener on clean up
          themeToggler?.removeEventListener("click", handleThemeToggle)
      };
    }, []);
  

  const ThemeToggler = (
    <button id="theme-toggler" ref={toggleRef} className="m-3 p-2 rounded-full bg-white text-black dark:bg-black dark:text-white" aria-label="Toggle dark mode">
      <span className="material-symbols-outlined" aria-hidden>dark_mode</span>
    </button>
  );


  return (
    <aside
      aria-expanded={isExpanded}
      className={
        cn(
          "text-xs fixed top-0 left-0 h-full w-[80px] z-0 flex flex-col justify-between pt-10 pb-6 bg-white shadow-[0_1px_2px] border-r-[1px] border-solid border-black",
          "border-r-[1px] border-solid border-black",
          "")}>
      {NavButtons}
      {ThemeToggler}
    </aside>
  )
}


export function AppBar(){
  const pathname = usePathname();
  const isExpanded = pathname != '/playground';
  
  return (
  <header aria-expanded={isExpanded} className='fixed z-[1] top-[-60px] left-0 w-full h-[60px] bg-white shadow-[0_1px_2px] transition ease-in-out duration-700 aria-expanded:translate-y-full'>      
    <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">Dynapack</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="material-symbols-outlined text-black" aria-hidden>search</div>
          <div className="material-symbols-outlined text-black" aria-hidden>palette</div>
        </div>
      </div>
    </header>
  )
}
