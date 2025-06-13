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
  return <div mui-rail="" {...props} role="navigation" />;
};

const RailHeader = ({ ...props }: RailHeaderProps) => {
  return <div mui-rail-header="" {...props} />;
};

const RailMenu = ({ ...props }: RailMenuProps) => {
  return <IconButton mui-rail-menu="" {...props} size="md" />;
};

const RailFab = ({ ...props }: RailFabProps) => {
  return <Fab {...props} variant="soft-secondary" />;
};

const RailBody = ({ alignment = "top", ...props }: RailBodyProps) => {
  return <div mui-rail-body="" data-alignment={alignment} {...props} />;
};

const RailItem = ({
  icon,
  label,
  selected = false,
  ...props
}: RailItemProps) => {
  return (
    <div mui-rail-item="" role="option" aria-selected={selected}>
      <IconButton {...props} size="md">
        <Icon name={icon} />
      </IconButton>
      {label && <span mui-rail-item-label="">{label}</span>}
    </div>
  );
};

export { Rail, RailHeader, RailMenu, RailFab, RailBody, RailItem };
