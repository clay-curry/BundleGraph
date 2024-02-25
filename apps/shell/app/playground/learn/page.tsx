'use client';

import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';

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
          Config
        </div>
      </Tabs.Trigger>
        </div>
    </Tabs.List >
    <Tabs.Content
      className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab1"
    >
      <p>
        Hi tab 1.
      </p>
    </Tabs.Content>
    <Tabs.Content
      className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab2"
    >
        <p>
            Hi tab 2.
        </p>
    </Tabs.Content>
    <Tabs.Content
      className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab3"
    >
        <p className='m-2'>
          At this stage of program synthesis, a convergence of module-systems conventions, bundler configuration, JavaScript runtimes, and previous build artifacts logically combine to form new build artifacts in Graphical fashion. Regardless of starting node, all walks trace backwards to one or more source files and, likewise, terminate at one or more emitted build artifacts.  
        </p><p className='m-2'>
          
          In addition to the build graph, additional relational structures between modules provide semantically meaningful information affecting the performance of the program, such as module dependencies, a render tree, state structure, lexical scope, and the interactions of distinct runtimes with multiple host environments. 
        </p>
    </Tabs.Content>
    <Tabs.Content
      className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab4"
    >
        <p>
            Having derived the bundle, this section evaluates static and time-evolving properties of build artifacts most important for UX, DX, and program correctness throught the whole lifecycle of the program. 
        </p>
    </Tabs.Content>
    <Tabs.Content
      className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab5"
    >
        <p>
            Hi tab 5.
        </p>
    </Tabs.Content>
  </Tabs.Root>
    )
}
