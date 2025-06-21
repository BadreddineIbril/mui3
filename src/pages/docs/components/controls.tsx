import { useLocation, useParams } from "react-router-dom";
import type { ComponentIdDefinition } from "@/types/demo";
import GET_STARTED_LINKS from "@/data/get-started";
import COMPONENT_GROUPS from "@/components/examples";
import Icon from "@/components/misc/icon";
import Button from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { findComponent } from "@/util/helpers";

const Controls = () => {
  const { component } = useParams();
  const { pathname } = useLocation();

  function isActiveLink(href: ComponentIdDefinition | (string & {})) {
    return pathname.split("/").at(-1) === href;
  }

  const { label, description } = findComponent(
    component as ComponentIdDefinition
  );

  return (
    <aside className="controls-area">
      <div className="info-box">
        <h2 className="title">{label}</h2>
        <p className="description">{description}</p>
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
                          href={`/docs${link.href && "/"}${link.href}`}
                          variant={
                            isActiveLink(link.href) ||
                            (pathname === "/docs" && link.href === "")
                              ? "filled"
                              : "text"
                          }>
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
                    {group.components.map((component, i) => (
                      <li key={i}>
                        <Button
                          href={`/docs/components/${component.id}`}
                          variant={
                            isActiveLink(component.id) ? "filled" : "text"
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
