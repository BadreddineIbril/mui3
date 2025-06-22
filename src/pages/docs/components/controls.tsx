import { useLocation, useNavigate, useParams } from "react-router-dom";
import type { GetStartedLinkId } from "@/types/common";
import type { ComponentIdDefinition } from "@/types/demo";
import GET_STARTED_LINKS from "@/components/get-started";
import COMPONENT_GROUPS from "@/components/examples";
import Icon from "@/components/misc/icon";
import Button from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { findComponent, findGetStartedLink } from "@/util/helpers";

const Controls = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { section, component } = useParams();

  function isActiveLink(href: ComponentIdDefinition | (string & {})) {
    return pathname.split("/").at(-1) === href;
  }

  const info = {
    component: findComponent(component as ComponentIdDefinition),
    getStarted: findGetStartedLink(section as GetStartedLinkId),
  };

  return (
    <aside className="controls-area">
      <div className="info-box">
        <h2 className="title">{info[component ? "component" : "getStarted"].label}</h2>
        <p className="description">{info[component ? "component" : "getStarted"].description}</p>
      </div>
      <div className="links-box">
        <Tabs defaultTab={component ? "components" : "get-started"} inlineIcon>
          <TabsList>
            <TabsTrigger value="get-started" onClick={() => navigate("/docs")}>
              <Icon name="explore" /> Get Started
            </TabsTrigger>
            <TabsTrigger
              value="components"
              onClick={() => navigate("/docs/components/button")}>
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
                      <li key={link.id}>
                        <Button
                          href={`/docs${link.id && "/"}${link.id}`}
                          variant={
                            isActiveLink(link.id) ||
                            (pathname === "/docs" && link.id === "")
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
