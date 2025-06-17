import Icon from "@/components/misc/icon";
import { ChipItem, Chips } from "@/components/ui/chips";

const ChipsLayout = () => {
  const layouts: Array<"wrap" | "scroll"> = ["wrap", "scroll"];

  return (
    <div className="demo">
      {layouts.map((layout) => (
        <Chips key={layout} layout={layout}>
          <ChipItem variant="assist">Assist 1</ChipItem>
          <ChipItem variant="assist">
            <Icon name="map" /> Assist 2
          </ChipItem>
          <ChipItem variant="assist">Assist 3</ChipItem>
          <ChipItem variant="assist">Assist 4</ChipItem>
        </Chips>
      ))}
    </div>
  );
};

export default ChipsLayout;
