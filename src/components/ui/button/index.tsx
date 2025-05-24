import "./style.css";
import type { ComponentProps, HTMLAttributeAnchorTarget } from "react";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "elevated" | "filled" | "tonal" | "outlined" | "text";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  href?: string;
  target?: HTMLAttributeAnchorTarget;
};

const Button = ({
  variant = "filled",
  target = "_self",
  size = "sm",
  onClick,
  href,
  ...props
}: ButtonProps) => {
  return (
    <button
      data-button={variant}
      data-size={size}
      {...props}
      onClick={(e) => {
        onClick?.(e);
        if (!e.defaultPrevented && href) open(href, target);
      }}
    />
  );
};

export default Button;
