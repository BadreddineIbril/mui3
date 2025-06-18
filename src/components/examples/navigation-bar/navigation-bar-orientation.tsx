import { useState } from "react";
import { Bar, BarItem } from "@/components/ui/navigation/bar";

const NavigationBarOrientation = () => {
  const [active, setActive] = useState<number>(0);
  const OPTIONS = [
    { label: "Home", icon: "home" },
    { label: "Browser", icon: "explore" },
    { label: "Radio", icon: "radio" },
    { label: "library", icon: "library_music" },
  ];

  const orientations: Array<"horizontal" | "vertical"> = [
    "horizontal",
    "vertical",
  ];

  return (
    <div className="demo">
      {orientations.map((orientation) => (
        <Bar key={orientation} orientation={orientation}>
          {OPTIONS.map((opt, i) => (
            <BarItem
              key={i}
              label={opt.label}
              icon={opt.icon}
              selected={active === i}
              onClick={() => setActive(i)}
            />
          ))}
        </Bar>
      ))}
    </div>
  );
};

export default NavigationBarOrientation;
