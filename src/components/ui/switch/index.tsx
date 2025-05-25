import "./style.css";
import type { ComponentProps } from "react";

type SwitchProps = Omit<ComponentProps<"input">, "type"> & {
  icons?: boolean;
  showOnlySelectedIcon?: boolean;
};

const Switch = ({ icons, showOnlySelectedIcon, ...props }: SwitchProps) => {
  return (
    <input
      data-switch
      data-icons={icons || undefined}
      data-show-only-selected-icon={showOnlySelectedIcon || undefined}
      {...props}
      type="checkbox"
    />
  );
};

export default Switch;
