import type { ComponentProps } from "react";

type IconProps = ComponentProps<"span"> & {
  name: string;
  fill?: boolean;
};

const Icon = ({ name, fill = false, className, ...props }: IconProps) => {
  return (
    <span
      mui-icon=""
      data-fill={fill}
      className={className + " material-symbols-outlined"}
      {...props}>
      {name}
    </span>
  );
};

export default Icon;
