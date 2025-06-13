import "./style.css";
import { createContext, useContext, type ComponentProps } from "react";
import Button from "@/components/ui/button";

type ButtonProps = ComponentProps<typeof Button>;
type SegmentedButtonsProps = ComponentProps<"div"> & {
  variant?: Exclude<ButtonProps["variant"], "text">;
  size?: ButtonProps["size"];
  disabled?: ButtonProps["disabled"];
};
type SegmentedButtonProps = ComponentProps<"button">;

const SplitButtonContext = createContext<{
  variant: Exclude<ButtonProps["variant"], "text">;
  size: ButtonProps["size"];
  disabled: ButtonProps["disabled"];
} | null>(null);

const useSplitButtonContext = () => {
  const ctx = useContext(SplitButtonContext);
  if (!ctx)
    throw new Error(
      "Split Group component must be used within a Split Group provider"
    );

  return ctx;
};

const SplitButton = ({
  variant = "filled",
  size = "xs",
  disabled,
  ...props
}: SegmentedButtonsProps) => {
  return (
    <SplitButtonContext.Provider value={{ variant, size, disabled }}>
      <div mui-split-button="" {...props} />
    </SplitButtonContext.Provider>
  );
};

const SplitButtonItem = ({ ...props }: SegmentedButtonProps) => {
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
