import "./style.css";
import { createContext, useContext, type ComponentProps } from "react";
import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";

type ButtonProps = ComponentProps<typeof Button>;
type IconButtonProps = ComponentProps<typeof IconButton>;
type Variant = ButtonProps["variant"] | IconButtonProps["variant"];

type ButtonGroupProps = ComponentProps<"div"> & {
  type?: "standard" | "connected";
  variant?: Variant;
  width?: IconButtonProps["width"];
  size?: ButtonProps["size"];
  disabled?: ButtonProps["disabled"];
  asIcon?: boolean;
};
type ButtonGroupItemProps = ComponentProps<"button"> & {
  variant?: Variant;
  width?: IconButtonProps["width"];
  rounded?: ButtonProps["rounded"];
  target?: ButtonProps["target"];
  href?: ButtonProps["href"];
  asIcon?: boolean;
};

const ButtonGroupContext = createContext<{
  variant: Variant;
  width: IconButtonProps["width"];
  size: ButtonProps["size"];
  disabled: ButtonProps["disabled"];
  asIcon: boolean;
} | null>(null);

const useButtonGroupContext = () => {
  const ctx = useContext(ButtonGroupContext);
  if (!ctx)
    throw new Error(
      "ButtonGroupItem must be used within a ButtonGroup component"
    );

  return ctx;
};

const ButtonGroup = ({
  type = "standard",
  variant = "tonal",
  disabled,
  width = "default",
  asIcon = false,
  size = "xs",
  ...props
}: ButtonGroupProps) => {
  return (
    <ButtonGroupContext value={{ variant, disabled, width, asIcon, size }}>
      <div mui-button-group={type} data-size={size} {...props} />
    </ButtonGroupContext>
  );
};

const ButtonGroupItem = ({
  variant,
  disabled,
  width,
  asIcon,
  target = "_self",
  ...props
}: ButtonGroupItemProps) => {
  const ctx = useButtonGroupContext();

  if (ctx.asIcon || asIcon) {
    return (
      <IconButton
        mui-button-group-item=""
        variant={(variant ?? ctx.variant) as IconButtonProps["variant"]}
        disabled={disabled ?? ctx.disabled}
        width={width ?? ctx.width}
        size={ctx.size}
        {...props}
      />
    );
  }

  return (
    <Button
      mui-button-group-item=""
      variant={(variant ?? ctx.variant) as ButtonProps["variant"]}
      disabled={disabled ?? ctx.disabled}
      size={ctx.size}
      target={target}
      {...props}
    />
  );
};

export { ButtonGroup, ButtonGroupItem };
