import Icon from "@/components/misc/icon";
import { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group";

const ButtonGroupVariant = () => {
  const variants: Array<"elevated" | "filled" | "tonal" | "outlined"> = [
    "elevated",
    "filled",
    "tonal",
    "outlined",
  ];

  return (
    <div className="demo">
      {variants.map((variant) => (
        <ButtonGroup variant={variant}>
          <ButtonGroupItem>
            <Icon name="directions_car" />
            Start
          </ButtonGroupItem>
          <ButtonGroupItem>
            <Icon name="directions_car" />
            Directions
          </ButtonGroupItem>
          <ButtonGroupItem>
            <Icon name="share" />
            Share
          </ButtonGroupItem>
        </ButtonGroup>
      ))}
    </div>
  );
};

export default ButtonGroupVariant;
