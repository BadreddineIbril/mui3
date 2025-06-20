import "./style.css";
import { useNavigate } from "react-router-dom";
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
  href,
  ...props
}: ButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      mui-button={variant}
      data-rounded={rounded}
      data-size={size}
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

export default Button;
