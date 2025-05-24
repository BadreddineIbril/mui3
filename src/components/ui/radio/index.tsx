import "./style.css";
import type { ComponentProps } from "react";

type RadioProps = Omit<ComponentProps<"input">, "type">;

const Radio = ({ ...props }: RadioProps) => {
  return <input data-radio {...props} type="radio" />;
};

export default Radio;
