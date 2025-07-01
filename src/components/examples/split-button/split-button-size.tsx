import Icon from "@/components/misc/icon";
import { SplitButton, SplitButtonItem } from "@/components/ui/split-button";

const SplitButtonSize = () => {
  const sizes: Array<"xs" | "sm" | "md" | "lg" | "xl"> = [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
  ];

  return (
    <div className="demo column">
      {sizes.map((size) => (
        <SplitButton key={size} size={size}>
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

export default SplitButtonSize;
