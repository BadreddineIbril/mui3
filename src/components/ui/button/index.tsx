import "./style.css";
import type { ComponentProps, HTMLAttributeAnchorTarget } from "react";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "elevated" | "filled" | "tonal" | "outlined" | "text";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  rounded?: boolean;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
};

const Button = ({
  variant = "filled",
  target = "_self",
  rounded = false,
  size = "sm",
  onClick,
  href,
  ...props
}: ButtonProps) => {
  return (
    <button
      data-button={variant}
      data-rounded={rounded}
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
