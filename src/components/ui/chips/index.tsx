import "./style.css";
import type { ComponentProps } from "react";
import Icon from "@/components/misc/icon";

type ChipsProps = ComponentProps<"div"> & {
  layout?: "wrap" | "scroll";
  variant?: "outlined" | "elevated";
};

type ChipItemProps = ComponentProps<"button"> & {
  variant?: "assist" | "suggestion" | "filter" | "input";
  selected?: boolean;
  onSelect?: () => void;
  removable?: boolean;
  onRemove?: () => void;
};

const Chips = ({
  variant = "outlined",
  layout = "wrap",
  ...props
}: ChipsProps) => {
  return <div mui-chips={variant} data-layout={layout} {...props} />;
};

const ChipItem = ({
  variant = "assist",
  selected,
  onSelect,
  removable,
  onRemove,
  children,
  ...props
}: ChipItemProps) => {
  return (
    <button
      mui-chip-item={variant}
      aria-selected={variant === "filter" && selected}
      {...props}
      onClick={(e) => {
        props.onClick?.(e);
        onSelect?.(e);
      }}>
      {variant === "filter" && selected && <Icon data-select name="check" />}
      {children}
      {variant === "input" && removable && (
        <Icon data-close name="close" onClick={onRemove} />
      )}
    </button>
  );
};

export { Chips, ChipItem };
