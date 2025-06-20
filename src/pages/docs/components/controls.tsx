import COMPONENT_GROUPS from "@/components/examples";
import Icon from "@/components/misc/icon";
import Button from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GET_STARTED_LINKS from "@/data/get-started";

const Controls = () => {
  return (
    <aside className="controls-area">
      <div className="info-box">
        <h2 className="title">Button</h2>
        <p className="description">
          Displays a button or a component that looks like a button.
        </p>
      </div>
      <div className="links-box">
        <Tabs defaultTab="get-started" inlineIcon>
          <TabsList>
            <TabsTrigger value="get-started">
              <Icon name="explore" /> Get Started
            </TabsTrigger>
            <TabsTrigger value="components">
              <Icon name="category" /> Components
            </TabsTrigger>
          </TabsList>
          <TabsContent value="get-started">
            <ul className="group">
              {GET_STARTED_LINKS.map((item) => (
                <>
                  <li className="title">{item.label}</li>
                  <ul className="components">
                    {item.links.map((link) => (
                      <li key={link.href}>
                        <Button
                          variant={link.href === "intro" ? "filled" : "text"}>
                          {link.label}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="components">
            <ul className="group">
              {COMPONENT_GROUPS.map((group) => (
                <>
                  <li key={group.id} className="title">
                    {group.label}
                  </li>
                  <ul className="components">
                    {group.components.map((component) => (
                      <li key={component.id}>
                        <Button
                          variant={
                            component.id === "switch" ? "filled" : "text"
                          }>
                          {component.label}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </div>
    </aside>
  );
};

export default Controls;
