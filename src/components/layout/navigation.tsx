import { useLocation } from "react-router-dom";
import { useTheme } from "@/contexts";
import Icon from "@/components/misc/icon";
import XIcon from "@/assets/icons/x";
import GithubIcon from "@/assets/icons/github";
import {
  SideSheet,
  SideSheetBody,
  SideSheetClose,
  SideSheetContent,
  SideSheetHeader,
  SideSheetTrigger,
} from "@/components/ui/side-sheet";
import Button from "@/components/ui/button";
import { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group";
import MaterialDesignIcon from "@/assets/icons/material-design";
import GET_STARTED_LINKS from "@/components/get-started";
import COMPONENT_GROUPS from "@/components/examples";
import type { ComponentIdDefinition } from "@/types/demo";

const Navigation = () => {
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();

  const LINKS = [
    { icon: <MaterialDesignIcon />, href: "/" },
    { label: "Docs", href: "/docs" },
    { label: "Components", href: "/docs/components/button" },
    { label: "Examples", href: "/examples" },
    { label: "Colors", href: "/docs/colors" },
  ];

  function isActive(href: string) {
    return pathname === href;
  }

  function isActiveComponent(href: ComponentIdDefinition | (string & {})) {
    return pathname.split("/").at(-1) === href;
  }

  return (
    <nav mui-layout="nav">
      <SideSheet variant="modal" position="start">
        <SideSheetTrigger>
          <Button variant="outlined" rounded className="sm-links">
            <Icon name="apps" />
            Menu
          </Button>
        </SideSheetTrigger>
        <SideSheetContent>
          <SideSheetHeader headline="Menu" close />
          <SideSheetBody className="group-box">
            <div className="links-group">
              <h3 className="group-title">Menu</h3>
              <div className="links">
                {LINKS.map((link, i) => (
                  <SideSheetClose key={i}>
                    <Button
                      variant={isActive(link.href) ? "filled" : "text"}
                      href={link.href}
                      rounded>
                      {link.icon ?? link.label}
                    </Button>
                  </SideSheetClose>
                ))}
              </div>
            </div>
            <div className="links-group">
              <h3 className="group-title">Get Started</h3>
              <div className="links">
                {GET_STARTED_LINKS.map((group) => (
                  <>
                    <h4 className="link-title">{group.label}</h4>
                    <div className="sub-links">
                      {group.links.map((link) => (
                        <SideSheetClose>
                          <Button
                            key={link.id}
                            variant={
                              isActiveComponent(link.id) ||
                              (pathname === "/docs" && link.id === "")
                                ? "filled"
                                : "text"
                            }
                            href={`/docs${link.id && "/"}${link.id}`}
                            rounded>
                            {link.label}
                          </Button>
                        </SideSheetClose>
                      ))}
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className="links-group">
              <h3 className="group-title">Components</h3>
              <div className="links">
                {COMPONENT_GROUPS.map((group) => (
                  <>
                    <h4 className="link-title">{group.label}</h4>
                    <div className="sub-links">
                      {group.components.map((comp) => (
                        <SideSheetClose key={comp.id}>
                          <Button
                            variant={
                              isActiveComponent(comp.id) ? "filled" : "text"
                            }
                            href={`/docs/components/${comp.id}`}
                            rounded>
                            {comp.label}
                          </Button>
                        </SideSheetClose>
                      ))}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </SideSheetBody>
        </SideSheetContent>
      </SideSheet>
      <ButtonGroup
        className="lg-links"
        variant="tonal"
        type="connected"
        size="sm">
        {LINKS.map((link, i) => (
          <ButtonGroupItem
            key={i}
            href={link.href}
            variant={isActive(link.href) ? "filled" : "tonal"}
            rounded={isActive(link.href)}>
            {link.icon || link.label}
          </ButtonGroupItem>
        ))}
      </ButtonGroup>
      <ButtonGroup variant="outlined" size="sm" asIcon>
        <span className="beta-badge">BETA</span>
        <ButtonGroupItem aria-label="theme" onClick={toggleTheme} width="wide">
          <Icon name={theme === "light" ? "dark_mode" : "light_mode"} />
        </ButtonGroupItem>
        <ButtonGroupItem aria-label="github">
          <GithubIcon />
        </ButtonGroupItem>
        <ButtonGroupItem aria-label="X">
          <XIcon />
        </ButtonGroupItem>
      </ButtonGroup>
    </nav>
  );
};

export default Navigation;
