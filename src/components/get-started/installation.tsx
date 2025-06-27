import { useTheme } from "@/contexts";
import CodeBlock from "@/components/misc/code/code-block";
import MultiCodeBlock from "@/components/misc/code/multi-code-block";

const Installation = () => {
  const { tokens } = useTheme();

  return (
    <div mui-get-started="installation">
      <div className="installation-box">
        <article className="content">
          <p>
            MUI3 is compatible with any React-based framework. I'll walk you
            through the install using{" "}
            <a href="https://vite.dev" target="_blank">
              Vite
            </a>
            , it's pretty much the same for everything else, so you're good.
          </p>
        </article>
      </div>
      <div className="installation-box">
        <div className="heading">
          <h2 className="title">Create a project</h2>
        </div>
        <article className="content">
          <p>Create a new Vite project with the React + TypeScript template.</p>
          <div className="guide">
            <MultiCodeBlock
              options={[
                { id: "pnpm", label: "pnpm", code: "pnpm create vite@latest" },
                { id: "npm", label: "npm", code: "npm create vite@latest" },
                { id: "yarn", label: "yarn", code: "yarn create vite@latest" },
                { id: "bun", label: "bun", code: "bun create vite@latest" },
              ]}
            />
          </div>
        </article>
      </div>
      <div className="installation-box">
        <div className="heading">
          <h2 className="title">Alias</h2>
        </div>
        <article className="content">
          <p>
            Open your <small>tsconfig.json</small> and{" "}
            <small>tsconfig.app.json</small> files, then add{" "}
            <small>baseUrl</small> and <small>paths</small> inside
            compilerOptions.
          </p>
          <div className="guide">
            <CodeBlock
              label="tsconfig.json"
              code={`{\n    "files": [],\n    "references": [\n        {\n            "path": "./tsconfig.app.json"\n        },\n        {\n            "path": "./tsconfig.node.json"\n        }\n    ],\n    "compilerOptions": {\n        "baseUrl": ".",\n        "paths": {\n            "@/*": ["./src/*"]\n        }\n    }\n}`}
            />
            <CodeBlock
              label="tsconfig.app.json"
              code={`{\n    "compilerOptions": {\n        // ...\n        "baseUrl": ".",\n        "paths": {\n            "@/*": [\n                "./src/*"\n            ]\n        }\n        // ...\n    }\n}`}
            />
          </div>
          <p>
            To make sure your app resolves custom paths properly, drop this
            snippet into <small>vite.config.ts</small>.
          </p>
          <div className="guide">
            <MultiCodeBlock
              options={[
                { id: "pnpm", label: "pnpm", code: "pnpm add -D @types/node" },
                { id: "npm", label: "npm", code: "npm install -D @types/node" },
                { id: "yarn", label: "yarn", code: "yarn add -D @types/node" },
                { id: "bun", label: "bun", code: "bun add -D @types/node" },
              ]}
            />
            <CodeBlock
              label="vite.config.ts"
              code={`import path from "path";\nimport react from "@vitejs/plugin-react";\nimport { defineConfig } from "vite"\n \n// https://vite.dev/config/\nexport default defineConfig({\n    plugins: [react()],\n    resolve: {\n        alias: {\n            "@": path.resolve(__dirname, "./src"),\n        },\n    },\n})`}
            />
          </div>
        </article>
      </div>
      <div className="installation-box">
        <div className="heading">
          <h2 className="title">Icons</h2>
        </div>
        <article className="content">
          <p>
            We'll use{" "}
            <a href="https://fonts.google.com/icons" target="_blank">
              Google Icons
            </a>
            , just a single import in <small>index.html</small>. Then create a
            little helper component with a few props to make working with icons
            smoother in your components.
          </p>
          <div className="guide">
            <CodeBlock
              label="index.html"
              code={`<head>\n    ...\n    <link\n        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0"\n        rel="stylesheet" />\n    ...\n</head>`}
              lang="html"
            />
            <CodeBlock
              label="components/misc/icon.tsx"
              code={
                'import type { ComponentProps } from "react";\n \ntype IconProps = ComponentProps<"span"> & {\n    name: string;\n    filled?: boolean;\n};\n \nconst Icon = ({ name, filled = false, ...props }: IconProps) => {\n    return (\n        <span\n            mui-icon=""\n            data-filled={filled}\n            className={`material-symbols-outlined ${props.className || ""}`.trim()}\n            {...props}>\n            {name}\n        </span>\n    );\n};\n \nexport default Icon;'
              }
            />
            <CodeBlock
              label="app/globals.css"
              code={`[mui-icon] {\n    &[data-filled="true"] {\n        font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24;\n    }\n}`}
              lang="css"
            />
          </div>
        </article>
      </div>
      <div className="installation-box">
        <div className="heading">
          <h2 className="title">Font</h2>
        </div>
        <article className="content">
          <p>
            Include <small>Roboto</small> font from{" "}
            <a href="https://fonts.google.com" target="_blank">
              Google Fonts
            </a>
            .
          </p>
          <div className="guide">
            <CodeBlock
              label="index.html"
              code={`<head>\n    ...\n    <link rel="preconnect" href="https://fonts.googleapis.com" />\n    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n    <link\n        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"\n        rel="stylesheet" />\n    ...\n</head>`}
              lang="html"
            />
          </div>
        </article>
      </div>
      <div className="installation-box">
        <div className="heading">
          <h2 className="title">Tokens</h2>
        </div>
        <article className="content">
          <p>
            These are the variables behind the components. You can use them too
            to customize things even more to your style.
          </p>
          <div className="guide">
            <CodeBlock label="tokens.css" code={tokens} lang="css" />
          </div>
        </article>
      </div>
    </div>
  );
};

export default Installation;
