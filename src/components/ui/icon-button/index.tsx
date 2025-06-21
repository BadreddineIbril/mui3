import "./style.css";
import { useNavigate } from "react-router-dom";
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
  href,
  ...props
}: IconButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      mui-icon-button={variant}
      data-width={width}
      data-size={size}
      data-flip-icon-in-rtl={flipIconInRtl || undefined}
      {...props}
      onClick={(e) => {
        props.onClick?.(e);
        if (!e.defaultPrevented && href) {
          if (target === "_blank") {
            open(href, target, "noopener,noreferrer");
          } else {
            navigate(href);
          }
        }
      }}
    />
  );
};

export default IconButton;
