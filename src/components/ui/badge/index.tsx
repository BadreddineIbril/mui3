import "./style.css";
import type { ComponentProps } from "react";

type BadgeProps = ComponentProps<"span"> & {
  size?: "sm" | "lg";
  label?: string;
};

const Badge = ({ size = "sm", label, ...props }: BadgeProps) => {
  return <span data-badge={size} data-label={label} {...props} />;
};

export default Badge;
