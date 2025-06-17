import { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group";

const ButtonGroupDisabled = () => {
  return (
    <div className="demo">
      <ButtonGroup disabled>
        <ButtonGroupItem>Start</ButtonGroupItem>
        <ButtonGroupItem>Directions</ButtonGroupItem>
        <ButtonGroupItem>Share</ButtonGroupItem>
      </ButtonGroup>
    </div>
  );
};

export default ButtonGroupDisabled;
