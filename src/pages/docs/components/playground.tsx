import type { JSX } from "react";
import CssIcon from "@/assets/icons/css";
import TypescriptIcon from "@/assets/icons/typescript";
import Icon from "@/components/misc/icon";
import Copy from "@/components/misc/copy";
import SyntaxHighlighter from "@/components/misc/syntax-highlighter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BUTTON_DEMO from "@/components/examples/button";
import ICON_BUTTON_DEMO from "@/components/examples/icon-button";
import FAB_DEMO from "@/components/examples/fab";
import SPLIT_BUTTON_DEMO from "@/components/examples/split-button";
import BUTTON_GROUP_DEMO from "@/components/examples/button-group";
import CHECKBOX_DEMO from "@/components/examples/checkbox";
import RADIO_DEMO from "@/components/examples/radio";
import SWITCH_DEMO from "@/components/examples/switch";
import SLIDER_DEMO from "@/components/examples/slider";
import CHIPS_DEMO from "@/components/examples/chips";
import NAVIGATION_BAR_DEMO from "@/components/examples/navigation-bar";

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
    <section className="playground">
      {NAVIGATION_BAR_DEMO.content.map(({ id, label, preview, code }) => (
        <div key={id} className="playground-box">
          {label && (
            <div className="heading">
              <h2 className="title">{label}</h2>
            </div>
          )}
          <Tabs defaultTab={isInstallation(id) ? "tsx" : "preview"} inlineIcon>
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
    </section>
  );
};

export default Playground;
