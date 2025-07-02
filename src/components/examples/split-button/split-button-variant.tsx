import Icon from "@/components/misc/icon";
import { SplitButton, SplitButtonItem } from "@/components/ui/split-button";

const SplitButtonVariant = () => {
  const variants: Array<"elevated" | "filled" | "tonal" | "outlined"> = [
    "elevated",
    "filled",
    "tonal",
    "outlined",
  ];

  return (
    <div className="demo wrap">
      {variants.map((variant) => (
        <SplitButton key={variant} variant={variant}>
          <SplitButtonItem>
            <Icon name="edit" />
            Label
          </SplitButtonItem>
          <SplitButtonItem>
            <Icon name="keyboard_arrow_down" />
          </SplitButtonItem>
        </SplitButton>
      ))}
    </div>
  );
};

export default SplitButtonVariant;
