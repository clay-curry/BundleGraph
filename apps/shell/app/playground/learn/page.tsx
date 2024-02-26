'use client';

import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import Link from 'next/link';
import FileExplorer from '@/components/FileExplorer';


export default function Page() {
    return (<main className='flex justify-center items-center h-full w-full'>
        <TabsDemo />
    </main>)

}

export function TabsDemo() {
    return (
  <Tabs.Root
    className="w-[100%] h-[100%] mt-6 mx-2"
    activationMode="manual"
  >
    <Tabs.List aria-label="Manage your account">
      <div className='flex flex-row gap-2'>
      
      <Tabs.Trigger value="tab1" asChild>
        <div className="bg-white px-5 mx-2 h-[25px] flex items-center justify-center text-[15px] rounded-xl outline-none hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black">
          Project
        </div>
      </Tabs.Trigger>
      <Tabs.Trigger value="tab2" asChild>
        <div className="bg-white px-5 mx-2 h-[25px] flex items-center justify-center text-[15px] rounded-xl outline-none hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black">
          Configure
        </div>
      </Tabs.Trigger>
      <Tabs.Trigger value="tab3" asChild>
        <div className="bg-white px-5 mx-2 h-[25px] flex items-center justify-center text-[15px] rounded-xl outline-none hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black">
          Modules
        </div>
      </Tabs.Trigger>
      <Tabs.Trigger value="tab4" asChild>
        <div className="bg-white px-5 mx-2 h-[25px] flex items-center justify-center text-[15px] rounded-xl outline-none hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black">
          Bundle
        </div>
      </Tabs.Trigger>
      <Tabs.Trigger value="tab5" asChild>
        <div className="bg-white px-5 mx-2 h-[25px] flex items-center justify-center text-[15px] rounded-xl outline-none hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black">
          Explore
        </div>
      </Tabs.Trigger>
        </div>
    </Tabs.List >
    <Tabs.Content
      className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab1"
      asChild
    >
      <div className='mx-6'>

        
      {/*

      <p className='m-2'>
      Select your project. This will originate from one of the following three places: 
      </p>
      
      <p className='m-2'>
      As you select a project, a web worker will configure your local system and runtime with the instrumentation required to be a viable host for collecting metrics about your build at various stages of the bundling process.
      
      </p>

      <p className='m-2'>
        If you prefer, feel free to use one of the many built-in projects to get started. Users familiar with Webpack might recognize the code, as it was adopted directly from the <Link href="https://github.com/webpack/webpack">Webpack repository</Link>.
      </p>
    */}
      <FileExplorer />
    </div>

    </Tabs.Content>
    <Tabs.Content
      className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab2"
      asChild
    >
        <p>
            Before the bundler can begin to assemble the program, it must be configured. Though default configurations are provided, it is frequently if not most oftenly the case that the exact bundling needs of your project may require a custom configuration. Tremendous effort was invested in the following tools to make this process as painless and educational as possible.
        </p>
    </Tabs.Content>
    <Tabs.Content
      className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab3"
      asChild
    >
      <div>

        <p className='m-2'>
          At this stage of program synthesis, a convergence of module-systems conventions, your bundler's configuration, the JavaScript runtime, and previous build artifacts are logically combined by the static-module-bundler, in <em>Graphical fashion</em>, to derive a newly assembled set of artifacts. All walks in the Graph trace backwards to one (or more) source files authored in possibly multiple languages; likewise, all walks in the forward direction of the graph terminate at one (or more) so-called <em>target files</em> (or <em>build artifacts</em>), often expressed in multiple programming languages.  
        </p><p className='m-2'>
          
          In addition to the build graph, additional relational structures between modules provide semantically meaningful information affecting the performance of the program, such as module dependencies, a render tree, state structure, lexical scope, and the interactions of distinct runtimes with multiple host environments. 
        </p>
      </div>
    </Tabs.Content>
    <Tabs.Content
      className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab4"
      asChild
    >
      <div>
        <p>
            This section discusses a handful of the most salient static and time-evolving properties of build artifacts, or bundles, relevant to UX, DX throught the whole lifecycle of the program. 
            A firm control of the formation process of software bundle artifacts introduces the capacity for highly nuanced interactions with the compiler to enable the construction of arbitrary program artifacts, known as *compile-time meta-programming*.
            
        </p>
        <p>
            A quality unique to the runtime language family is the degree of *run-time dynamicity* or the capacity for a program to spontaneously examine itself (introspection), alter its structure (self-modification), and alter its behavior (intercession) *during program execution*. Moreov
        </p> 

      </div>
    </Tabs.Content>
    <Tabs.Content
      className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab5"
      asChild
    >
        <p>
            Explore!
        </p>
    </Tabs.Content>
  </Tabs.Root>
    )
}
