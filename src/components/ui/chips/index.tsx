import "./style.css";
import type { ComponentProps } from "react";
import Icon from "@/components/misc/icon";

type ChipsProps = ComponentProps<"div"> & {
  layout?: "wrap" | "scroll";
  variant?: "outlined" | "elevated";
};

type BaseProps = ComponentProps<"button"> & {
  variant?: "assist" | "suggestion";
};

type FilterProps = ComponentProps<"button"> & {
  variant: "filter";
  selected: boolean;
  onSelect: () => void;
};

type InputProps = ComponentProps<"button"> & {
  variant: "input";
  removable: boolean;
  onRemove: () => void;
};

type ChipItemProps = BaseProps | FilterProps | InputProps;

const Chips = ({
  variant = "outlined",
  layout = "wrap",
  ...props
}: ChipsProps) => {
  return <div data-chips={variant} data-layout={layout} {...props} />;
};

const ChipItem = ({
  variant = "assist",
  selected,
  removable,
  children,
  onClick,
  onRemove,
  onSelect,
  ...props
}: ChipItemProps) => {
  return (
    <button
      data-chip-item={variant}
      aria-pressed={selected}
      {...props}
      onClick={(e) => {
        onClick?.(e);
        onSelect?.(e);
      }}>
      {selected && <Icon data-select name="check" />}
      {children}
      {removable && <Icon data-close name="close" onClick={onRemove} />}
    </button>
  );
};

export { Chips, ChipItem };
