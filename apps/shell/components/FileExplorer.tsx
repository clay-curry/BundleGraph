"use client"

import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { GeistProvider, Tree, Code } from '@geist-ui/core'


const demoFileTree = [
  {
    name: 'src',
    type: 'folder',
    content: '',
    children: [
      {
        name: 'index.js',
        type: 'file',
        content: 'console.log("Hello, world!")',
      },
      {
        name: 'components',
        type: 'folder',
        content: '',
        children: [
          {
            name: 'FileExplorer.tsx',
            type: 'file',
            content: 'export default function FileExplorer() { ... }',
          },
        ],
      },
    ],
  },
  {
    name: 'package.json',
    type: 'file',
    content: '{ "name": "my-app", "version": "1.0.0" }',
  },
  {
    name: 'webpack.config.js',
    type: 'file',
    content: 'module.exports = {}',
  },
];


interface NestedFileProps {
  name: string;
  type: string;
  content: string;
  children?: NestedFileProps[];
}[]

interface FileExplorerProps {
  sourceFiles?: NestedFileProps[];
  outputFiles?: NestedFileProps[];
}

export default function FileExplorer({ sourceFiles=demoFileTree, outputFiles }: FileExplorerProps) {

  const [textArea, setTextArea] = React.useState<string>();

  
  const buildRenderTree = ({ file }: { file: NestedFileProps }) => (file.type === 'file') ? 
    (
      <Tree.File name={file.name} onClick={() => setTextArea(file.content)} /> 
    ) 
    : 
    (
      <Tree.Folder name={file.name}>
        {file.children?.map((child)=> buildRenderTree({ file: child }))}
      </Tree.Folder>
    )
  

  return (
    <Tabs.Root>
      <Tabs.List aria-label="Visual navigation of source files" asChild>
        <div className='flex justify-center'>
          <div className='flex items-center relative rounded-md py-[3px] px-1 max-w-full h-10 font-medium text-[rgb(23,23,23)] bg-[#fff] [box-shadow:0_0_0_1px_rgba(0,0,0,.08)]'>

            <Tabs.Trigger value="source" asChild>

              <button className="min-w-20 h-full pointer bg-transparent rounded-[3px] font-medium">
                Source
              </button>

            </Tabs.Trigger>

            <Tabs.Trigger value="output" asChild>

              <button className="min-w-20">
                Output
              </button>
            </Tabs.Trigger>

          </div>
        </div>
      </Tabs.List>
      <Tabs.TabsContent value="source" asChild>       
        
        <div className='flex flex-row mx-6'>
            <GeistProvider>
          <div className='w-60 h-full'>
              <Tree>
                {sourceFiles.map((file, index) => buildRenderTree({ file }))}
              </Tree>
            </div>
          <Code block>
            {textArea}
          </Code>
            </GeistProvider>
        </div>

      </Tabs.TabsContent>
      {outputFiles && (
        <Tabs.TabsContent value="output" asChild>
          <div className="flex-1">
            <h2>Output Files</h2>
            <ul>
              {outputFiles.map((file, index) => (
                <li key={index}>
                  <h3>{file.name}</h3>
                  <p>{file.type}</p>
                  <pre>{file.content}</pre>
                </li>
              ))}
            </ul>
          </div>
        </Tabs.TabsContent>
      )}
    </Tabs.Root>
  )
}