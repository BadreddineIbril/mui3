import { useState } from "react";
import { ChipItem, Chips } from "@/components/ui/chips";

const ChipsDemo = () => {
  const [isSelected, setSelected] = useState<boolean>(false);
  const [isRemoved, setRemoved] = useState<boolean>(false);

  return (
    <div className="demo">
      <Chips>
        <ChipItem variant="assist">Assist</ChipItem>
        <ChipItem
          variant="filter"
          selected={isSelected}
          onSelect={() => setSelected(!isSelected)}>
          Filter
        </ChipItem>
        {!isRemoved && (
          <ChipItem variant="input" removable onRemove={() => setRemoved(true)}>
            Input
          </ChipItem>
        )}
        <ChipItem variant="suggestion">Suggestion</ChipItem>
      </Chips>
    </div>
  );
};

export default ChipsDemo;
