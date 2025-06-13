import "./style.css";
import type { ComponentProps } from "react";

type CardProps = ComponentProps<"div"> & {
  variant?: "elevated" | "filled" | "outlined";
};
type CardActionAreaProps = ComponentProps<"button">;

const Card = ({ variant = "elevated", ...props }: CardProps) => {
  return <div mui-card={variant} {...props} />;
};

const CardActionArea = ({ ...props }: CardActionAreaProps) => {
  return <button mui-card-action-area="" {...props} />;
};

export { Card, CardActionArea };
