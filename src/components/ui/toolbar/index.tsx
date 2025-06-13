import "./style.css";
import type { ComponentProps } from "react";

type ToolbarProps = ComponentProps<"div"> & {
  variant?: "docked" | "floating";
  orientation?: "horizontal" | "vertical";
  type?: "standard" | "vibrant";
  alignment?: "spread" | "center";
};

const Toolbar = ({
  variant = "docked",
  orientation = "horizontal",
  alignment = "spread",
  type = "standard",
  ...props
}: ToolbarProps) => {
  return (
    <div
      mui-toolbar={variant}
      data-type={type}
      data-alignment={alignment}
      aria-orientation={orientation}
      {...props}
      role="toolbar"
    />
  );
};

export default Toolbar;
