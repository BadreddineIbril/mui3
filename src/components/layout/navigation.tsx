import { useLocation } from "react-router-dom";
import Icon from "@/components/misc/icon";
import XIcon from "@/assets/icons/x";
import GithubIcon from "@/assets/icons/github";
import { ButtonGroup, ButtonGroupItem } from "../ui/button-group";

const Navigation = () => {
  const { pathname } = useLocation();

  const LINKS = [
    { label: "Docs", href: "/docs" },
    { label: "Components", href: "/components" },
    { label: "Examples", href: "/examples" },
    { label: "Colors", href: "/colors" },
  ];

  function isHome() {
    return pathname === "/";
  }

  function isActive(href: string) {
    return pathname === href;
  }

  return (
    <nav mui-layout="nav">
      <ButtonGroup variant="tonal" type="connected" size="sm">
        <ButtonGroupItem
          variant={isHome() ? "filled" : "tonal"}
          rounded={isHome()}>
          <Icon name="nest_eco_leaf" />
          Home
        </ButtonGroupItem>
        {LINKS.map((link) => (
          <ButtonGroupItem
            key={link.label}
            variant={isActive(link.href) ? "filled" : "tonal"}
            rounded={isActive(link.href)}>
            {link.label}
          </ButtonGroupItem>
        ))}
      </ButtonGroup>
      <ButtonGroup type="connected" variant="outlined" size="sm" asIcon>
        <ButtonGroupItem variant="tonal" width="wide">
          <Icon name="light_mode" />
        </ButtonGroupItem>
        <ButtonGroupItem>
          <GithubIcon />
        </ButtonGroupItem>
        <ButtonGroupItem>
          <XIcon />
        </ButtonGroupItem>
      </ButtonGroup>
    </nav>
  );
};

export default Navigation;
