import Icon from "@/components/misc/icon";
import { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group";

const ButtonGroupType = () => {
  const types: Array<"standard" | "connected"> = ["standard", "connected"];

  return (
    <div className="demo column">
      {types.map((type) => (
        <ButtonGroup key={type} type={type}>
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

export default ButtonGroupType;
