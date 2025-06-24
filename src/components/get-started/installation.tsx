import Copy from "@/components/misc/copy";
import SyntaxHighlighter from "@/components/misc/syntax-highlighter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Installation = () => {
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
          <Tabs defaultTab="pnpm" inlineIcon className="selector min">
            <TabsList>
              <TabsTrigger value="pnpm">pnpm</TabsTrigger>
              <TabsTrigger value="npm">npm</TabsTrigger>
              <TabsTrigger value="yarn">yarn</TabsTrigger>
              <TabsTrigger value="bun">bun</TabsTrigger>
            </TabsList>
            <TabsContent value="pnpm" className="code-content">
              <div className="output">
                <SyntaxHighlighter code="pnpm create vite@latest" />
              </div>
              <Copy content="pnpm" />
            </TabsContent>
            <TabsContent value="npm" className="code-content">
              <div className="output">
                <SyntaxHighlighter code="npm create vite@latest" />
              </div>
            </TabsContent>
            <TabsContent value="yarn" className="code-content">
              <div className="output">
                <SyntaxHighlighter code="yarn create vite@latest" />
              </div>
            </TabsContent>
            <TabsContent value="bun" className="code-content">
              <div className="output">
                <SyntaxHighlighter code="bun create vite@latest" />
              </div>
            </TabsContent>
          </Tabs>
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
          // CODE <br />
          // CODE
          <p>
            To make sure your app resolves custom paths properly, drop this
            snippet into <small>vite.config.ts</small>.
          </p>
          <Tabs defaultTab="pnpm" inlineIcon className="selector min">
            <TabsList>
              <TabsTrigger value="pnpm">pnpm</TabsTrigger>
              <TabsTrigger value="npm">npm</TabsTrigger>
              <TabsTrigger value="yarn">yarn</TabsTrigger>
              <TabsTrigger value="bun">bun</TabsTrigger>
            </TabsList>
            <TabsContent value="pnpm" className="code-content">
              <div className="output">
                <SyntaxHighlighter code="pnpm add -D @types/node" />
              </div>
              <Copy content="pnpm" />
            </TabsContent>
            <TabsContent value="npm" className="code-content">
              <div className="output">
                <SyntaxHighlighter code="npm install -D @types/node" />
              </div>
            </TabsContent>
            <TabsContent value="yarn" className="code-content">
              <div className="output">
                <SyntaxHighlighter code="yarn add -D @types/node" />
              </div>
            </TabsContent>
            <TabsContent value="bun" className="code-content">
              <div className="output">
                <SyntaxHighlighter code="bun add -D @types/node" />
              </div>
            </TabsContent>
          </Tabs>
          // CODE
        </article>
      </div>
      <div className="installation-box">
        <div className="heading">
          <h2 className="title">Icons</h2>
        </div>
        <article className="content">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi,
            expedita.
          </p>
          // Import icons from  Google Material Icons Present the Icon component
        </article>
      </div>
      <div className="installation-box">
        <div className="heading">
          <h2 className="title">Font</h2>
        </div>
        <article className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, tempora!
          </p>
          // Font integration
        </article>
      </div>
      <div className="installation-box">
        <div className="heading">
          <h2 className="title">Tokens</h2>
        </div>
        <article className="content">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi,
            expedita.
          </p>
          // CSS VARIABLES (COLORS + TOKENS)
        </article>
      </div>
    </div>
  );
};

export default Installation;
