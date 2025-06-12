import Icon from "@/components/misc/icon";
import { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group";

const ButtonGroupDemo = () => {
  return (
    <div className="demo">
      <ButtonGroup type="connected" size="sm">
        <ButtonGroupItem variant="filled" style={{ borderRadius: "999px" }}>
          8 oz
        </ButtonGroupItem>
        <ButtonGroupItem>12 oz</ButtonGroupItem>
        <ButtonGroupItem>16 oz</ButtonGroupItem>
        <ButtonGroupItem>20 oz</ButtonGroupItem>
      </ButtonGroup>
      <ButtonGroup variant="outlined" width="narrow" size="sm" asIcon>
        <ButtonGroupItem width="default">
          <Icon name="bluetooth" />
        </ButtonGroupItem>
        <ButtonGroupItem width="default">
          <Icon name="alarm" />
        </ButtonGroupItem>
        <ButtonGroupItem>
          <Icon name="link_off" />
        </ButtonGroupItem>
        <ButtonGroupItem width="wide" disabled>
          <Icon name="wifi" />
        </ButtonGroupItem>
      </ButtonGroup>
    </div>
  );
};

export default ButtonGroupDemo;
