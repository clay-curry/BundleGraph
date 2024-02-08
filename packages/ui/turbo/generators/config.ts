import type { PlopTypes } from "@turbo/gen";
import type { ReactNode } from "react";
// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI): void {

  plop.setHelper('jsxProp', function(prop) {
    return `${prop}={${prop}}`;
  });

  
  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator("react-component", {
    description: "Adds a new react component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/{{kebabCase name}}.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "append",
        path: "index.tsx",
        pattern: /"exports": {(?<insertion>)/g,
        template: '"./{{kebabCase name}}": "./src/{{kebabCase name}}.tsx",',
      },
    ],
  });

  const propTypes = {
    className: "string",
    text: "string",
    links: "any[]",
    iconLinks: "React.ReactNode[]",
    buttonLinks: "React.ReactNode[]",
    image: "React.ReactNode",
    buttons: "React.ReactNode[]",
    name: "string",
    heading: "string | React.ReactNode",
    subheading: "string | React.ReactNode",
    cards: "React.ReactNode[]",
    columns: "number",
    branding: "any[]",
    features: "any[]",
    copyright: "any[]"
  }

  plop.setGenerator("reflex-js block", {
    description: "Adds a new block component from reflex-js",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the block?",
      },
      {
        type: "list",
        name: "tag",
        message: "What HTML tag wraps this block?",
        choices: ["div", "section", "article", "aside", "header", "footer", "main", "nav"],
      },
      {
        type: "checkbox",
        name: "props",
        message: "Which props should be included?",
        choices: ["className", "text", "links", "iconLinks", "buttonLinks", "image", "buttons", "name", "heading", "subheading", "cards", "columns", "branding", "features", "copyright"],
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/{{kebabCase name}}.tsx",
        templateFile: "templates/block.hbs",
        data: {
          "propTypes": propTypes
        },
      }
    ],
  });
}
