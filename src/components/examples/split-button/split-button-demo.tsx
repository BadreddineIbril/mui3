import Icon from "@/components/misc/icon";
import { SplitButton, SplitButtonItem } from "@/components/ui/split-button";

const SplitButtonDemo = () => {
  return (
    <div className="demo">
      <SplitButton>
        <SplitButtonItem>
          <Icon name="edit" />
          Label
        </SplitButtonItem>
        <SplitButtonItem>
          <Icon name="keyboard_arrow_down" />
        </SplitButtonItem>
      </SplitButton>
    </div>
  );
};

export default SplitButtonDemo;
