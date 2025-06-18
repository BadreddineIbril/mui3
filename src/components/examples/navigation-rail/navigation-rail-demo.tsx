import Icon from "@/components/misc/icon";
import {
  Rail,
  RailBody,
  RailFab,
  RailHeader,
  RailItem,
  RailMenu,
} from "@/components/ui/navigation/rail";

const NavigationRailDemo = () => {
  return (
    <div className="demo">
      <Rail>
        <RailHeader>
          <RailMenu>
            <Icon name="menu" />
          </RailMenu>
          <RailFab>
            <Icon name="hourglass_top" />
          </RailFab>
        </RailHeader>
        <RailBody alignment="bottom">
          <RailItem icon="schedule" label="Alarm" />
          <RailItem icon="star" label="Clock" />
          <RailItem icon="hourglass_top" label="Timer" selected />
          <RailItem icon="timer" label="Stopwatch" />
        </RailBody>
      </Rail>
    </div>
  );
};

export default NavigationRailDemo;
