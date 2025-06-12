import { useState } from "react";
import Icon from "@/components/misc/icon";
import { ChipItem, Chips } from "@/components/ui/chips";

const ChipsDemo = () => {
  const [amenities, setAmenities] = useState<
    { label: string; icon?: string; isSelected: boolean }[]
  >([
    { label: "Washer / Dryer", isSelected: true },
    { label: "Ramp access", isSelected: false },
    { label: "Garden", isSelected: false },
    { label: "Cats OK", icon: "pets", isSelected: false },
    { label: "Dogs OK", icon: "pets", isSelected: false },
    { label: "Smoke-free", isSelected: false },
  ]);

  const [removed, setRemoved] = useState<boolean>(false);

  return (
    <div className="demo column">
      <Chips>
        <ChipItem>Orange</ChipItem>
        <ChipItem>Kiwi</ChipItem>
        <ChipItem>Banana</ChipItem>
        {!removed && (
          <ChipItem removable onRemove={() => setRemoved(true)}>
            Watermelon
          </ChipItem>
        )}
      </Chips>
      <Chips>
        {amenities.map((item, index) => (
          <ChipItem
            key={index}
            variant="filter"
            selected={item.isSelected}
            onSelect={() =>
              setAmenities((prev) =>
                prev.map((i, idx) =>
                  idx === index ? { ...i, isSelected: !item.isSelected } : i
                )
              )
            }>
            {item.icon && <Icon name={item.icon} />}
            {item.label}
          </ChipItem>
        ))}
      </Chips>
    </div>
  );
};

export default ChipsDemo;
