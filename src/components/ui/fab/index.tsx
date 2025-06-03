import "./style.css";
import type { ComponentProps } from "react";

type FabProps = ComponentProps<"button"> & {
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "soft-primary"
    | "soft-secondary"
    | "soft-tertiary";
  size?: "sm" | "md" | "lg";
};

const Fab = ({ variant = "soft-primary", size = "sm", ...props }: FabProps) => {
  return <button data-fab={variant} data-size={size} {...props} />;
};

export default Fab;
