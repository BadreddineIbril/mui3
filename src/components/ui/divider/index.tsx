import "./style.css";
import type { ComponentProps } from "react";

type DividerProps = ComponentProps<"hr"> & {
  orientation?: "horizontal" | "vertical";
};

const Divider = ({ orientation = "horizontal", ...props }: DividerProps) => (
  <hr mui-divider={orientation} {...props} />
);

export default Divider;
