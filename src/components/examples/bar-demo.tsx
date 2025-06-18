import { useState } from "react";
import { Bar, BarItem } from "@/components/ui/navigation/bar";

const NavigationBarDemo = () => {
  const [bar, setBar] = useState<number>(0);
  const OPTIONS = [
    {
      label: "Home",
      icon: "home",
    },
    {
      label: "Browser",
      icon: "explore",
    },
    {
      label: "Radio",
      icon: "radio",
    },
    {
      label: "Library",
      icon: "library_music",
    },
  ];

  return (
    <div className="demo column">
      <Bar style={{ width: "300px" }}>
        {OPTIONS.map((opt, i) => (
          <BarItem
            key={i}
            icon={opt.icon}
            label={opt.label}
            selected={i === bar}
            onClick={() => setBar(i)}
          />
        ))}
      </Bar>
      <Bar style={{ width: "500px" }} orientation="vertical">
        {OPTIONS.map((opt, i) => (
          <BarItem
            key={i}
            icon={opt.icon}
            label={opt.label}
            selected={i === 0}
          />
        ))}
      </Bar>
    </div>
  );
};

export default NavigationBarDemo;
