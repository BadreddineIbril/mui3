import { useState } from "react";
import { ChipItem, Chips } from "@/components/ui/chips";

const ChipsInput = () => {
  const [options, setOptions] = useState([
    { label: "Orange", removed: false },
    { label: "Banana", removed: false },
    { label: "Kiwi", removed: false },
    { label: "Watermelon", removed: false },
    { label: "Strawberry", removed: false },
    { label: "Apple", removed: false },
  ]);

  return (
    <div className="demo">
      <Chips>
        {options.map(
          (opt, index) =>
            !opt.removed && (
              <ChipItem
                key={index}
                variant="input"
                removable
                onRemove={() =>
                  setOptions((prev) =>
                    prev.map((item, i) =>
                      i === index ? { ...item, removed: true } : item
                    )
                  )
                }>
                {opt.label}
              </ChipItem>
            )
        )}
      </Chips>
    </div>
  );
};

export default ChipsInput;
