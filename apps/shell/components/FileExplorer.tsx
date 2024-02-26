import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';

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

interface DirTreeListNode {
  name: string;
  type: string;
  content: string;
  depth: number;
  isCollapsed?: boolean;
}

interface FileExplorerProps {
  sourceFiles: NestedFileProps[];
  outputFiles?: NestedFileProps[];
}

export default function FileExplorer({ sourceFiles=demoFileTree, outputFiles }: FileExplorerProps) {

  const [textArea, setTextArea] = React.useState<DirTreeListNode>();

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
        
        <div className='flex flex-row'>
          <div className='w-60 h-full'>
            <FileTree files={sourceFiles} setTextArea={setTextArea} />
          
            </div>
          <div className='w-full'>
            <textarea readOnly>
              {textArea?.content}
            </textarea>
          </div>
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



const FileTree = ({ files, setTextArea }: { files: NestedFileProps[], setTextArea: React.Dispatch<React.SetStateAction<DirTreeListNode | undefined>> }) => {
  
  if (!files) return null 

  function sortTreeRecursivelyInplace(tree: NestedFileProps[]) {
    tree.sort((a, b) => a.name.localeCompare(b.name)).sort((a, b) => a.type === 'folder' ? -1 : 1)
    tree.forEach((node) => {
      if (node.children) {
        sortTreeRecursivelyInplace(node.children)
      }
    })
    return tree
  }

  function traversePreorder(tree: NestedFileProps[]): DirTreeListNode[] {
    return [..._traversePreorder(tree, 0)]

    function* _traversePreorder(tree: NestedFileProps[], depth: number) {
      for (const node of tree) {
        yield {
          name: node.name,
          type: node.type,
          content: node.content,
          depth: depth,
        }
        if (node.children) {
          yield* _traversePreorder(node.children, depth + 1)
        }
      }
    }
  }
  
  const collapseAllFolders = (dirNodes: DirTreeListNode[]) => (dirNodes.map((node) => ({ ...node, isCollapsed: node.type === 'folder' ? true : undefined })))
  const FileIcon = () => <span className='w-6 h-7 mr-2'><svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" width="24"><path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"></path><path d="M13 2v7h7"></path></svg></span>
  const FolderIcon = () => <span className='w-6 h-7 mr-2'><svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" width="24"><path d="M2.707 7.454V5.62C2.707 4.725 3.469 4 4.409 4h4.843c.451 0 .884.17 1.204.474l.49.467c.126.12.296.186.473.186h8.399c.94 0 1.55.695 1.55 1.59v.737m-18.661 0h-.354a.344.344 0 00-.353.35l.508 11.587c.015.34.31.609.668.609h17.283c.358 0 .652-.269.667-.61L22 7.805a.344.344 0 00-.353-.35h-.278m-18.662 0h18.662"></path></svg></span>
  const TreeIndentIcon = () => <span className='inline-block w-[30px] h-7 bg-no-repeat [vertical-align:top] [background-image:linear-gradient(to_right,transparent_11.5px,#eaeaea_11.5px,#eaeaea_12.5px,transparent_12.5px)]'></span>
  const ToggleFolderOpen = () => <span className="bg-[#fff] ml-[-6] mr-[14px] [vertical-align:middle] py-[7px] text-[0px]"><svg className="size-3 [vertical-align:middle]" fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M12 8v8"></path><path d="M8 12h8"></path></svg></span>
  const ToggleFolderClosed = () => <span className="bg-[#fff] ml-[-6] mr-[14px] [vertical-align:middle] py-[7px] text-[0px]"><svg className="size-3 [vertical-align:middle]" fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M8 12h8"></path></svg></span>
  function InlineDirItemCompositer(node: DirTreeListNode) {
    if (node.depth > 0) {
      return [TreeIndentIcon, ...InlineDirItemCompositer({ ...node, depth: node.depth - 1 })]
    } 
    if (node.type === 'folder' && node.isCollapsed) {
      return [ToggleFolderOpen, FolderIcon]
      
    }
    if (node.type === 'folder' && !node.isCollapsed) {
      return [ToggleFolderClosed, FolderIcon]
    }
    return [TreeIndentIcon, FileIcon]
  }
  const DrawInlineDirItem = ({node} : {node: DirTreeListNode}) => {
    const composites = InlineDirItemCompositer(node)
    const Logo = composites.pop();
    return <>
      {composites.map((Item, index) => (<Item />))}
      <Logo />
      <span>{node.name}</span>
    </>
  }

  function filterVisibleNodes(fullTree: DirTreeListNode[]): DirTreeListNode[] {
    
    let depth = 0;
    let visibleNodes: DirTreeListNode[] = [];

    for (const node of fullTree) {
      if (node.depth === depth) {
        visibleNodes.push(node)
      }
      if (node.depth < depth) {
        visibleNodes.push(node)
        depth = node.depth
      }
      if (node.type === 'folder' && !node.isCollapsed) {
        depth = node.depth + 1
      }

    }

    return visibleNodes;  
  }

  
  const [fullDirNodeList, setFullDirNodeList] = React.useState<DirTreeListNode[]>(
    collapseAllFolders(traversePreorder(sortTreeRecursivelyInplace(files)))
  )
  

  function handleTreeClick(node: DirTreeListNode) {
    if (node.type === 'folder') {
      setFullDirNodeList(
        (prev) => { const next = prev.map((n, i) => ((n.name === node.name) ? { ...n, isCollapsed: !n.isCollapsed } : n)
        )
        return next
      })
    }
    if (node.type === 'file') {
      setTextArea(node);
    }
  }

  return (
    <div className='w-60 h-full'>
    <ul className='w-[201px]'>
      {filterVisibleNodes(fullDirNodeList).map((node, index) => (
        <li key={index} className='flex flex-row w-[177px] leading-7' onClick={() => handleTreeClick(node)}>
              <DrawInlineDirItem node={node} />
        </li>
      ))}
    </ul>
    </div>
  )
}