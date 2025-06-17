import Icon from "@/components/misc/icon";
import { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group";

const ButtonGroupSize = () => {
  const sizes: Array<"xs" | "sm" | "md" | "lg" | "xl"> = [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
  ];

  return (
    <div className="demo">
      {sizes.map((size) => (
        <ButtonGroup size={size}>
          <ButtonGroupItem>
            <Icon name="bluetooth" />
          </ButtonGroupItem>
          <ButtonGroupItem>
            <Icon name="alarm" />
          </ButtonGroupItem>
          <ButtonGroupItem>
            <Icon name="link" />
          </ButtonGroupItem>
          <ButtonGroupItem>
            <Icon name="wifi" />
          </ButtonGroupItem>
        </ButtonGroup>
      ))}
    </div>
  );
};

export default ButtonGroupSize;
