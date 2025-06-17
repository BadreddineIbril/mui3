import Icon from "@/components/misc/icon";
import { SplitButton, SplitButtonItem } from "@/components/ui/split-button";

const SplitButtonDisabled = () => {
  return (
    <div className="demo">
      <SplitButton disabled>
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

export default SplitButtonDisabled;
