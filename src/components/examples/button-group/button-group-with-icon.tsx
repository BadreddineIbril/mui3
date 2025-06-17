import Icon from "@/components/misc/icon";
import { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group";

const ButtonGroupWithIcon = () => {
  return (
    <div className="demo">
      <ButtonGroup>
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
    </div>
  );
};

export default ButtonGroupWithIcon;
