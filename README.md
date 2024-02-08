# Dynapack Project

This project has two introductions: 

1. one addressed to me 14 months back ("Mr. 'pip' ninja"),
2. one addressed to me today[^1]
[^1]: (still "Mr. 'pip' ninja", now only 14 months nearer to void)


## Introduction for "Mr. 'pip' ninja"

A Webpack dashboard? That's *quite* an interesting project, especially 



## Introduction for "Mr. 'pip' ninja" (14 months later)






Dynapack is a dead-simple, [OTel Compliant](https://opentelemetry.io/docs/specs/otel/common/) instrumentation framework for **static module bundlers**, **module federations**, and **runtime hosts**. Two reasons were paramount motivate our interest were considered activities of these systems, internal to 

is not expected


developers the clearest vantage of the logic behind their madness.

Now if extinguishing dependency hell was simply not concincing use of your time, perhaps 



, Dynapack fulfills a higher goal of are those who identify as independent learners. of independent and small-budget teams. To ensure design principles, Dynapack also serves 




As a proof of concept, the Dynapack 



 UI was designed with "no magic numbers" learning resources into the anatomy and physiology of 


help for developers climbing the steep learning curve of module systems and module bundlers. Dynapack is a specification for how to receive, process, and export telemetry data. A single binary that can be deployed as an agent or gateway. 



For maintainers, Dynapack is a framework for defining fundmamental units of work (a.k.a. ***spans***) relevant to the users of their codebase.



new design space for debugging tools  


. Importantly, 

What results from this is a build system 



Though full-support for Webpack will be intended  vendor-agnostic and tool-agnostic,






 both static and dynamic data, Dynapack can be used to analyze, validate, and optimize module systems and module bundlers at scale.




The task of tranforming a system of modules from one specification often delegated to "module bundlers". In 


Dynapack is a specification for how to receive, process, and export telemetry data. A single binary that can be deployed as an agent or gateway. 

## Features
- **toolchain observability**: shell-based programs cannot show the logic happening underneath.



 between module systems and module bundlers, animating, validating, and tuning bundlers at scale.


and vendor-agnostic specification of how to receive, process, and export 


telemetry data. A single binary that can be deployed as an agent or gateway.

 module systems and module bundlers, animating, validating, and tuning bundlers at scale

#### Etymology
Dyna- "dynamic structure", "dynamyte"
pack- "package", "webpack", "turbopack",





## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
