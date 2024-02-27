# BundleGraph

Welcome to the official repo for BundleGraph! This project is currently still in its prerelease phase and will remain so until its final design goals and MVP are finalized. An experimental version of the project is available on the official VSCode Marketplace. 

This project aims to extend the current tooling ecosystem for static module bundlers and bring these tools directly to developers in the IDE. Similar to package managers, bundler tooling makes code reuse, just work.


# Background

## History

Modular programming as a fundamental development paradigm has been a key factor in the success of the web, even before browsers became mainstream. Even email clients of the 1980s were built on an ecosystem of protocols and file formats implementing a "separation of concerns" approach for exchanging digital assets. By allowing text to specify its own document structure, HTML handed the job of deciding how to render content back to the developer. With CSS, the separation of concerns was extended to the visual layer, and JavaScript allowed for client-side scripting for use in forms and other interactive elements.

However, as the size and complexity of applications have grown, the ability of developers to write and maintain highly capable and performant HTML, CSS, and JavaScript suffered from a lack of reusable and composable language primitives that worked at scale.
After years of trial and error, standards and conventions for sharing and reusing code emerged in the form of Node.js, npm, and CommonJS. At the same time, meta-languages like Sass, Ruby were redefining how programmers both styled and structured apps, while Node.js libraries took over how browsers talked to servers. By the late 2000s, developers were full-blown polyglots, using a mix of languages and tools to build and maintain web applications. The everyday work of developers became manipulating a patchwork of code libraries colossal in size, written in multiple languages, and strung together in mind-numbingly large scripts. Often, the nuances involved with altering a codebase significantly were known only to God, and (thanks to Turing) there was no hope in ever knowing if said changes would be worthwhile (or even work) without restarting the whole codebase.

Then came the module bundler. 

## Bundlers

Bundlers are general-purpose compilers that permit developers to exert (arbitrarily) fine control over each aspect of program compilation, a practice known as [metaprogramming](https://en.wikipedia.org/wiki/Metaprogramming). Codebases written in arbitrarily many languages.

Bundlers make up where the package manager lacks.


## Design Goals

Loosely speaking, tooling for bundlers helps facilitatr the *effective_* use of bundlers. 

# Roadmap

Ideas being considered

### Planned
#### TODO:
- [ ] add [hero patterns](https://heropatterns.com/) to appropriate sections
- [ ] reproduce UI elements of [Monaco Editor](https://microsoft.github.io/monaco-editor/) relevant to bundling and reactive programming; [repo samples](https://github.com/microsoft/monaco-editor/tree/main/samples) may help
- [ ] design graphical models of call hierarchy events both incoming and outgoing, and internal to a program
- [ ] quantify coupling and visualize it with color
- [ ] build [SWC CSS Playground](https://swc-css.netlify.app/?code=eJwDAAAAAAE) locally for AST visualization components
- [ ] 

### Considering

- [ ] identify [compiler optimization](https://en.wikipedia.org/wiki/Optimizing_compiler) strategies compatible with a static module bundler


# Relatd Projects
TODO