import "./style.css";
import { createContext, useContext, type ComponentProps } from "react";
import Button from "@/components/ui/button";

type ButtonProps = ComponentProps<typeof Button>;
type SplitButtonProps = ComponentProps<"div"> & {
  variant?: Exclude<ButtonProps["variant"], "text">;
  size?: ButtonProps["size"];
  disabled?: ButtonProps["disabled"];
};
type SplitButtonItemProps = ComponentProps<"button">;

const SplitButtonContext = createContext<{
  variant: Exclude<ButtonProps["variant"], "text">;
  size: ButtonProps["size"];
  disabled: ButtonProps["disabled"];
} | null>(null);

const useSplitButtonContext = () => {
  const ctx = useContext(SplitButtonContext);
  if (!ctx)
    throw new Error(
      "SplitButtonItem must be used within a SplitButton component"
    );

  return ctx;
};

const SplitButton = ({
  variant = "filled",
  size = "xs",
  disabled,
  ...props
}: SplitButtonProps) => {
  return (
    <SplitButtonContext value={{ variant, size, disabled }}>
      <div mui-split-button="" {...props} />
    </SplitButtonContext>
  );
};

const SplitButtonItem = ({ ...props }: SplitButtonItemProps) => {
  const { variant, size, disabled } = useSplitButtonContext();

  return (
    <Button
      mui-split-button-item=""
      disabled={disabled}
      variant={variant}
      size={size}
      {...props}
    />
  );
};

export { SplitButton, SplitButtonItem };
