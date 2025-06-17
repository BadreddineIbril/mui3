import Icon from "@/components/misc/icon";
import { ChipItem, Chips } from "@/components/ui/chips";

const ChipsAssist = () => {
  return (
    <div className="demo">
      <Chips>
        <ChipItem variant="assist">Assist 1</ChipItem>
        <ChipItem variant="assist">
          <Icon name="map" /> Assist 2
        </ChipItem>
        <ChipItem variant="assist">Assist 3</ChipItem>
        <ChipItem variant="assist">Assist 4</ChipItem>
      </Chips>
      <Chips variant="elevated">
        <ChipItem variant="assist">Assist 1</ChipItem>
        <ChipItem variant="assist">
          <Icon name="map" /> Assist 2
        </ChipItem>
        <ChipItem variant="assist">Assist 3</ChipItem>
        <ChipItem variant="assist">Assist 4</ChipItem>
      </Chips>
    </div>
  );
};

export default ChipsAssist;
