import "./style.css";
import {
  Children,
  useContext,
  createContext,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type ComponentProps,
} from "react";
import Icon from "@/components/misc/icon";
import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";

type BarProps = ComponentProps<"div"> & {
  orientation?: "horizontal" | "vertical";
};
type BarItemProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> & {
  icon: string;
  label?: string;
  selected?: boolean;
};

const BarContext = createContext<{
  orientation: "horizontal" | "vertical";
} | null>(null);

const useBarContext = () => {
  const ctx = useContext(BarContext);
  if (!ctx) throw new Error("BarItem must be used within a Bar component.");

  return ctx;
};

const Bar = ({ orientation = "horizontal", style, ...props }: BarProps) => {
  return (
    <BarContext.Provider value={{ orientation }}>
      <div
        data-bar
        aria-orientation={orientation}
        {...props}
        role="navigation"
        style={
          {
            "--length": Children.count(props.children),
            ...style,
          } as CSSProperties
        }
      />
    </BarContext.Provider>
  );
};

const BarItem = ({ icon, label, selected = false, ...props }: BarItemProps) => {
  const { orientation } = useBarContext();

  return (
    <div data-bar-item aria-selected={selected}>
      {orientation === "horizontal" ? (
        <>
          <IconButton {...props}>
            <Icon name={icon} />
          </IconButton>
          {label && <span data-bar-item-label>{label}</span>}
        </>
      ) : (
        <Button variant="text" size="md" {...props}>
          <Icon name={icon} />
          {label}
        </Button>
      )}
    </div>
  );
};

export { Bar, BarItem };
