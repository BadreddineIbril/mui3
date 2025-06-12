import Icon from "@/components/misc/icon";
import { SplitButton, SplitButtonItem } from "@/components/ui/split-button";

const SplitButtonDemo = () => {
  return (
    <div className="demo">
      <SplitButton>
        <SplitButtonItem>Label</SplitButtonItem>
        <SplitButtonItem>
          <Icon name="keyboard_arrow_down" />
        </SplitButtonItem>
      </SplitButton>
      <SplitButton variant="outlined">
        <SplitButtonItem>No</SplitButtonItem>
        <SplitButtonItem>
          <Icon name="keyboard_arrow_down" />
        </SplitButtonItem>
      </SplitButton>
      <SplitButton variant="tonal">
        <SplitButtonItem>
          <Icon name="edit" />
        </SplitButtonItem>
        <SplitButtonItem>
          <Icon name="keyboard_arrow_down" />
        </SplitButtonItem>
      </SplitButton>
    </div>
  );
};

export default SplitButtonDemo;
