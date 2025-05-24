import "./style.css";
import type { ComponentProps, HTMLAttributeAnchorTarget } from "react";

type IconButtonProps = ComponentProps<"button"> & {
  variant?: "standard" | "filled" | "tonal" | "outlined";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  width?: "default" | "narrow" | "wide";
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  flipIconInRtl?: boolean;
};

const IconButton = ({
  flipIconInRtl = false,
  variant = "standard",
  width = "default",
  target = "_self",
  size = "sm",
  onClick,
  href,
  ...props
}: IconButtonProps) => {
  return (
    <button
      data-icon-button={variant}
      data-width={width}
      data-size={size}
      data-flip-icon-in-rtl={flipIconInRtl || undefined}
      {...props}
      onClick={(e) => {
        onClick?.(e);
        if (!e.defaultPrevented && href) open(href, target);
      }}
    />
  );
};

export default IconButton;
