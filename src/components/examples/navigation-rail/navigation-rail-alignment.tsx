import Icon from "@/components/misc/icon";
import {
  Rail,
  RailBody,
  RailFab,
  RailHeader,
  RailItem,
  RailMenu,
} from "@/components/ui/navigation/rail";

const NavigationRailAlignment = () => {
  const alignments: Array<"top" | "center" | "bottom"> = [
    "top",
    "center",
    "bottom",
  ];

  return (
    <div className="demo">
      {alignments.map((alignment) => (
        <Rail>
          <RailHeader>
            <RailMenu>
              <Icon name="menu" />
            </RailMenu>
            <RailFab>
              <Icon name="hourglass_top" />
            </RailFab>
          </RailHeader>
          <RailBody alignment={alignment}>
            <RailItem icon="schedule" label="Alarm" />
            <RailItem icon="star" label="Clock" />
            <RailItem icon="hourglass_top" label="Timer" selected />
            <RailItem icon="timer" label="Stopwatch" />
          </RailBody>
        </Rail>
      ))}
    </div>
  );
};

export default NavigationRailAlignment;
