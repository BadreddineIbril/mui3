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
      "Button Group component must be used within a Button Group provider"
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
    <ButtonGroupContext.Provider
      value={{ variant, disabled, width, asIcon, size }}>
      <div mui-button-group={type} data-size={size} {...props} />
    </ButtonGroupContext.Provider>
  );
};

const ButtonGroupItem = ({
  variant,
  disabled,
  width,
  asIcon,
  ...props
}: ButtonGroupItemProps) => {
  const ctx = useButtonGroupContext();
  const Component = asIcon || ctx.asIcon ? IconButton : Button;

  return (
    <Component
      mui-button-group-item=""
      variant={variant ?? ctx.variant}
      disabled={disabled ?? ctx.disabled}
      width={width ?? ctx.width}
      size={ctx.size}
      {...props}
    />
  );
};

export { ButtonGroup, ButtonGroupItem };
