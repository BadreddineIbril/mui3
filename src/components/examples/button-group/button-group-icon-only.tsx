import Icon from "@/components/misc/icon";
import { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group";

const ButtonGroupIconOnly = () => {
  return (
    <div className="demo">
      <ButtonGroup size="sm" variant="outlined" asIcon>
        <ButtonGroupItem width="narrow">
          <Icon name="bluetooth" />
        </ButtonGroupItem>
        <ButtonGroupItem>
          <Icon name="alarm" />
        </ButtonGroupItem>
        <ButtonGroupItem width="wide">
          <Icon name="link" />
        </ButtonGroupItem>
        <ButtonGroupItem>
          <Icon name="wifi" />
        </ButtonGroupItem>
      </ButtonGroup>
    </div>
  );
};

export default ButtonGroupIconOnly;
