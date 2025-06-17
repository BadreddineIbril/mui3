import { useState } from "react";
import { ChipItem, Chips } from "@/components/ui/chips";

const ChipsFilter = () => {
  const [options, setOptions] = useState([
    { label: "Washer / Dryer", selected: true },
    { label: "Ramp access", selected: false },
    { label: "Garden", selected: false },
    { label: "Cats OK", selected: false },
    { label: "Dogs OK", selected: false },
    { label: "Smoke-free", selected: false },
  ]);

  return (
    <div className="demo">
      <Chips>
        {options.map((opt, index) => (
          <ChipItem
            key={index}
            variant="filter"
            selected={opt.selected}
            onSelect={() =>
              setOptions((prev) =>
                prev.map((item, i) =>
                  i === index ? { ...item, selected: !opt.selected } : item
                )
              )
            }>
            {opt.label}
          </ChipItem>
        ))}
      </Chips>
    </div>
  );
};

export default ChipsFilter;
