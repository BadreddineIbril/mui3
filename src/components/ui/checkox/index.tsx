import "./style.css";
import type { ComponentProps } from "react";

type CheckboxProps = Omit<ComponentProps<"input">, "type">;

const Checkbox = ({ ...props }: CheckboxProps) => {
  return <input data-checkbox {...props} type="checkbox" />;
};

export default Checkbox;
