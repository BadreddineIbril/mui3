import { useParams } from "react-router-dom";
import { findComponent } from "@/util/helpers";
import type { ComponentIdDefinition } from "@/types/demo";
import CssIcon from "@/assets/icons/css";
import TypescriptIcon from "@/assets/icons/typescript";
import Copy from "@/components/misc/copy";
import Icon from "@/components/misc/icon";
import InvokeComponent from "@/components/misc/invoke-component";
import SyntaxHighlighter from "@/components/misc/syntax-highlighter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ComponentsPlayground = () => {
  const { component } = useParams();
  const { content } = findComponent(component as ComponentIdDefinition);

  const TREE = [
    { label: "components/", icon: "folder_open" },
    { label: "ui/", icon: "folder_open" },
    { label: `${component}/`, icon: "folder_open" },
  ];

  function isInstallation(id: string) {
    return id === "installation";
  }

  function isInstallationCode(code: string | { tsx: string; css: string }) {
    return typeof code === "object";
  }

  return (
    <>
      {content.map(({ id, label, preview, code }) => (
        <div key={id} className="playground-box" id={id}>
          {label && (
            <div className="heading">
              <h2 className="title">{label}</h2>
              {isInstallation(id) && (
                <div className="tree">
                  {TREE.map((dir, i) => (
                    <span key={i} className="dir">
                      <Icon name={dir.icon} />
                      {dir.label}
                    </span>
                  ))}
                </div>
              )}
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
                  preview && InvokeComponent(preview)
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
    </>
  );
};

export default ComponentsPlayground;
