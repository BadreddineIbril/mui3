import Icon from "@/components/misc/icon";
import {
  Rail,
  RailHeader,
  RailMenu,
  RailBody,
  RailItem,
  RailFab,
} from "@/components/ui/navigation/rail";

const NavigationRailDemo = () => {
  return (
    <div className="demo">
      <Rail style={{ height: "600px" }}>
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
      <Rail style={{ height: "600px" }}>
        <RailHeader>
          <RailMenu>
            <Icon name="menu" />
          </RailMenu>
          <RailFab>
            <Icon name="hourglass_top" />
          </RailFab>
        </RailHeader>
        <RailBody>
          <RailItem icon="schedule" />
          <RailItem icon="star" />
          <RailItem icon="hourglass_top" selected />
          <RailItem icon="timer" />
        </RailBody>
      </Rail>
    </div>
  );
};

export default NavigationRailDemo;
