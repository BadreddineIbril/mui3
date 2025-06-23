import { useState } from "react";
import { ChipItem, Chips } from "@/components/ui/chips";

const ChipsVariant = () => {
  const variants: Array<"elevated" | "outlined"> = ["elevated", "outlined"];

  const [isSelected, setSelected] = useState<boolean>(false);
  const [isRemoved, setRemoved] = useState<boolean>(false);

  return (
    <div className="demo column">
      {variants.map((variant) => (
        <Chips key={variant} variant={variant}>
          <ChipItem variant="assist">Assist</ChipItem>
          <ChipItem
            variant="filter"
            selected={isSelected}
            onSelect={() => setSelected(!isSelected)}>
            Filter
          </ChipItem>
          {!isRemoved && (
            <ChipItem
              variant="input"
              removable
              onRemove={() => setRemoved(true)}>
              Input
            </ChipItem>
          )}
          <ChipItem variant="suggestion">Suggestion</ChipItem>
        </Chips>
      ))}
    </div>
  );
};

export default ChipsVariant;
