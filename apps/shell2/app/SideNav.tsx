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

interface RailDrawerNode {
  name: string,
  icon: string,
}

interface RailDrawerTreeNode extends RailDrawerNode {
  target: string | RailDrawerTreeNode[]
}


export const AccordionDemo = () => {
  const rootRef = createRef<HTMLDivElement>();
  return (
  <Accordion.Root
    ref={rootRef}
    className="bg-mauve6 w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5"
    type="single"
    collapsible
  >
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger>Is it unstyled?</AccordionTrigger>
      <AccordionContent>
        Yes. It's unstyled by default, giving you freedom over the look and feel.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger>Can it be animated?</AccordionTrigger>
      <AccordionContent>
        Yes! You can animate the Accordion with CSS or JavaScript.
      </AccordionContent>
    </AccordionItem>
  </Accordion.Root>
)};


type AccordionItemProps = { value: string, children: React.ReactNode; className?: string }
const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(({ value, children, className, ...props }, forwardedRef: Ref<HTMLDivElement>) => (
  <Accordion.Item value={value} {...props} ref={forwardedRef} className={cn(
      'focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]',
      className
    )}
  >
    {children}
  </Accordion.Item>
));


const CaretDownIcon = ({className, ...props}: { className?: string }) => <span {...props} className={ cn("material-symbols-outlined", className) }>expand_more</span>

type AccordionTriggerProps = { children: React.ReactNode, className?: string }
const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(({ children, className, ...props }, forwardedRef: Ref<HTMLButtonElement>) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger {...props} ref={forwardedRef}
      className={cn(className,
        'text-violet11 shadow-mauve6 hover:bg-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none'
      )}>
      {children}
      <p aria-hidden className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180">
        <CaretDownIcon />
      </p>
    </Accordion.Trigger>
  </Accordion.Header>
  )
);


type AccordionContentProps = { children?: React.ReactNode, className?: string }
const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    {...props} 
    ref={forwardedRef} 
    className={
      cn('text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]', className)
    } 
  >
    <div className="py-[15px] px-5">{children}</div>
  </Accordion.Content>
));



export const NavigationMenuDemo = () => {
  
  
  type ListItemProps = {
    title: string, href?: string, className?: string, children: React.ReactNode
  }

  const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
    ({ className, children, href, title, ...props }, forwardedRef) => (
      <li>
        <NavigationMenu.Link asChild>
          <a {...props} ref={forwardedRef} href={href}
            className={
              cn('focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors', className)}
          >
            <div className="text-violet12 mb-[5px] font-medium leading-[1.2]">{title}</div>
            <p className="text-mauve11 leading-[1.4]">{children}</p>
          </a>
        </NavigationMenu.Link>
      </li>
    )
  );

  return (
    <NavigationMenu.Root className="relative z-[1] flex w-screen justify-center">
      <NavigationMenu.List className="center shadow-blackA4 m-0 flex list-none rounded-[6px] bg-white p-1 shadow-[0_2px_10px]">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            Learn{' '}
            <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
            <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
              <li className="row-span-3 grid">
                <NavigationMenu.Link asChild>
                  <a
                    className="focus:shadow-violet7 from-purple9 to-indigo9 flex
                    h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                    href="/"
                  >
                    <svg aria-hidden width="38" height="38" viewBox="0 0 25 25" fill="white">
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div className="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white">
                      Radix Primitives
                    </div>
                    <p className="text-mauve4 text-[14px] leading-[1.3]">
                      Unstyled, accessible components for React.
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>

              <ListItem title="Stitches" key="first" children={
                <div>    
                  CSS-in-JS with best-in-class developer experience.
                </div>
              }
              />
              <ListItem href="/colors" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Icons">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            Overview{' '}
            <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
            <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
              <ListItem title="Introduction" href="/primitives/docs/overview/introduction">
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem title="Getting started" href="/primitives/docs/overview/getting-started">
                A quick tutorial to get you up and running with Radix Primitives.
              </ListItem>
              <ListItem title="Styling" href="/primitives/docs/guides/styling">
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem title="Animation" href="/primitives/docs/guides/animation">
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem title="Accessibility" href="/primitives/docs/overview/accessibility">
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem title="Releases" href="/primitives/docs/overview/releases">
                Radix Primitives releases and their changelogs.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            href="https://github.com/radix-ui"
          >
            Github
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};





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
        name: "Playground",
        target: "/playground",
        icon: 'toys_fan'
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
    }
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
          <h1 className="text-xl font-bold">Dynapack</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="material-symbols-outlined text-black" aria-hidden>search</div>
          <div className="material-symbols-outlined text-black" aria-hidden>palette</div>
        </div>
      </div>
    </header>
  )
}
