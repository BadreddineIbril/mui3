import "./style.css";
import type { ComponentProps, ButtonHTMLAttributes } from "react";
import Fab from "@/components/ui/fab";
import IconButton from "@/components/ui/icon-button";
import Icon from "@/components/misc/icon";

type RailProps = ComponentProps<"div">;
type RailHeaderProps = ComponentProps<"div">;
type RailMenuProps = ComponentProps<"button">;
type RailFabProps = ComponentProps<"button">;
type RailBodyProps = ComponentProps<"div"> & {
  alignment?: "top" | "center" | "bottom";
};
type RailItemProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> & {
  icon: string;
  label?: string;
  selected?: boolean;
};

const Rail = ({ ...props }: RailProps) => {
  return <div data-rail {...props} role="navigation" />;
};

const RailHeader = ({ ...props }: RailHeaderProps) => {
  return <div data-rail-header {...props} />;
};

const RailMenu = ({ ...props }: RailMenuProps) => {
  return <IconButton data-rail-menu {...props} size="md" />;
};

const RailFab = ({ ...props }: RailFabProps) => {
  return <Fab {...props} variant="soft-secondary" />;
};

const RailBody = ({ alignment = "top", ...props }: RailBodyProps) => {
  return <div data-rail-body data-alignment={alignment} {...props} />;
};

const RailItem = ({
  icon,
  label,
  selected = false,
  ...props
}: RailItemProps) => {
  return (
    <div data-rail-item role="option" aria-selected={selected}>
      <IconButton {...props} size="md">
        <Icon name={icon} />
      </IconButton>
      {label && <span data-rail-item-label>{label}</span>}
    </div>
  );
};

export { Rail, RailHeader, RailMenu, RailFab, RailBody, RailItem };
