import type { ComponentProps } from "react";

type IconProps = ComponentProps<"span"> & {
  name: string;
  filled?: boolean;
};

const Icon = ({ name, filled = false, ...props }: IconProps) => {
  return (
    <span
      mui-icon=""
      data-filled={filled}
      className={`material-symbols-outlined ${props.className || ""}`.trim()}
      {...props}>
      {name}
    </span>
  );
};

export default Icon;
