import type { ComponentProps } from "react";

type ShapeProps = ComponentProps<"div"> & {
  variant?: ShapeVariant;
};

export type ShapeVariant =
  | "circle"
  | "square"
  | "arch"
  | "semicircle"
  | "fan"
  | "oval"
  | "diamond";

const Shape = ({ variant = "circle", ...props }: ShapeProps) => {
  return <div mui-shape={variant} {...props} />;
};

export default Shape;
