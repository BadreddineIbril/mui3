import { useState } from "react";
import { ChipItem, Chips } from "@/components/ui/chips";

const ChipsDisabled = () => {
  const [isSelected, setSelected] = useState<boolean>(false);
  const [isRemoved, setRemoved] = useState<boolean>(false);

  return (
    <div className="demo">
      <Chips>
        <ChipItem variant="assist" disabled>
          Assist
        </ChipItem>
        <ChipItem
          variant="filter"
          selected={isSelected}
          onSelect={() => setSelected(!isSelected)}
          disabled>
          Filter
        </ChipItem>
        {!isRemoved && (
          <ChipItem
            variant="input"
            removable
            onRemove={() => setRemoved(true)}
            disabled>
            Input
          </ChipItem>
        )}
        <ChipItem variant="suggestion" disabled>
          Suggestion
        </ChipItem>
      </Chips>
    </div>
  );
};

export default ChipsDisabled;
