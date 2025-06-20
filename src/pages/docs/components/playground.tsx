import type { JSX } from "react";
import CssIcon from "@/assets/icons/css";
import TypescriptIcon from "@/assets/icons/typescript";
import Icon from "@/components/misc/icon";
import Copy from "@/components/misc/copy";
import SyntaxHighlighter from "@/components/misc/syntax-highlighter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DIVIDER_DEMO from "@/components/examples/divider";
import Button from "@/components/ui/button";

const Playground = () => {
  function toComponent(element: () => JSX.Element) {
    const Component = element;

    return <Component />;
  }

  function isInstallation(id: string) {
    return id === "installation";
  }

  function isInstallationCode(code: string | { tsx: string; css: string }) {
    return typeof code === "object";
  }

  return (
    <section className="playground-area">
      {DIVIDER_DEMO.content.map(({ id, label, preview, code }) => (
        <div key={id} className="playground-box">
          {label && (
            <div className="heading">
              <h2 className="title">{label}</h2>
            </div>
          )}
          <Tabs
            className="selector"
            defaultTab={isInstallation(id) ? "tsx" : "preview"}
            inlineIcon>
            {isInstallation(id) ? (
              <TabsList>
                <TabsTrigger value="tsx">
                  <TypescriptIcon /> index.tsx
                </TabsTrigger>
                <TabsTrigger value="css">
                  <CssIcon /> style.css
                </TabsTrigger>
              </TabsList>
            ) : (
              <TabsList>
                <TabsTrigger value="preview">
                  <Icon name="looks" /> Preview
                </TabsTrigger>
                <TabsTrigger value="code">
                  <Icon name="code" /> Code
                </TabsTrigger>
              </TabsList>
            )}
            <TabsContent
              className={
                isInstallation(id) ? "code-content" : "preview-content"
              }
              value={isInstallation(id) ? "tsx" : "preview"}>
              <div className="output">
                {isInstallationCode(code) ? (
                  <SyntaxHighlighter code={code.tsx} />
                ) : (
                  preview && toComponent(preview)
                )}
              </div>
              {isInstallation(id) && (
                <Copy content={isInstallationCode(code) ? code.tsx : code} />
              )}
            </TabsContent>
            <TabsContent
              className="code-content"
              value={isInstallation(id) ? "css" : "code"}>
              <div className="output">
                <SyntaxHighlighter
                  code={isInstallationCode(code) ? code.css : code}
                />
              </div>
              <Copy content={isInstallationCode(code) ? code.css : code} />
            </TabsContent>
          </Tabs>
        </div>
      ))}
      <div className="playground-actions">
        <Button variant="text">
          <Icon name="arrow_left_alt" />
          Button
        </Button>
        <Button variant="text">
          Fab
          <Icon name="arrow_right_alt" />
        </Button>
      </div>
    </section>
  );
};

export default Playground;
