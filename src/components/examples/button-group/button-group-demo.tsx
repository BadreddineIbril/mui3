import { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group";

const ButtonGroupDemo = () => {
  return (
    <div className="demo">
      <ButtonGroup>
        <ButtonGroupItem>Start</ButtonGroupItem>
        <ButtonGroupItem>Directions</ButtonGroupItem>
        <ButtonGroupItem>Share</ButtonGroupItem>
      </ButtonGroup>
    </div>
  );
};

export default ButtonGroupDemo;
