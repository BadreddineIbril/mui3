import { useState } from "react";
import { Bar, BarItem } from "@/components/ui/navigation-bar";

const NavigationBarDisabled = () => {
  const [active, setActive] = useState<number>(0);

  const OPTIONS = [
    { label: "Home", icon: "home" },
    { label: "Browser", icon: "explore" },
    { label: "Radio", icon: "radio" },
    { label: "library", icon: "library_music" },
  ];

  return (
    <div className="demo">
      <Bar>
        {OPTIONS.map((opt, i) => (
          <BarItem
            key={i}
            label={opt.label}
            icon={opt.icon}
            selected={active === i}
            disabled={i === 2}
            onClick={() => setActive(i)}
          />
        ))}
      </Bar>
    </div>
  );
};

export default NavigationBarDisabled;
