import { useLocation } from "react-router-dom";
import { useTheme } from "@/contexts";
import Icon from "@/components/misc/icon";
import XIcon from "@/assets/icons/x";
import GithubIcon from "@/assets/icons/github";
import { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group";

const Navigation = () => {
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();

  const LINKS = [
    { label: "Home", href: "" },
    { label: "Docs", href: "docs" },
    { label: "Components", href: "components" },
    { label: "Examples", href: "examples" },
    { label: "Colors", href: "colors" },
  ];

  function isActive(href: string) {
    return pathname.split("/")[1] === href;
  }

  return (
    <nav mui-layout="nav">
      <ButtonGroup variant="tonal" type="connected" size="sm">
        {LINKS.map((link) => (
          <ButtonGroupItem
            key={link.label}
            href={`/${link.href}`}
            variant={isActive(link.href) ? "filled" : "tonal"}
            rounded={isActive(link.href)}>
            {link.label}
          </ButtonGroupItem>
        ))}
      </ButtonGroup>
      <ButtonGroup variant="outlined" size="sm" asIcon>
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
