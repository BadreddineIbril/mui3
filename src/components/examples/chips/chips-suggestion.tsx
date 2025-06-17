import Icon from "@/components/misc/icon";
import { ChipItem, Chips } from "@/components/ui/chips";

const ChipsSuggestion = () => {
  return (
    <div className="demo">
      <Chips>
        <ChipItem variant="suggestion">Suggestion 1</ChipItem>
        <ChipItem variant="suggestion">
          <Icon name="map" /> Suggestion 2
        </ChipItem>
        <ChipItem variant="suggestion">Suggestion 3</ChipItem>
        <ChipItem variant="suggestion">Suggestion 4</ChipItem>
      </Chips>
      <Chips variant="elevated">
        <ChipItem variant="suggestion">Suggestion 1</ChipItem>
        <ChipItem variant="suggestion">
          <Icon name="map" /> Suggestion 2
        </ChipItem>
        <ChipItem variant="suggestion">Suggestion 3</ChipItem>
        <ChipItem variant="suggestion">Suggestion 4</ChipItem>
      </Chips>
    </div>
  );
};

export default ChipsSuggestion;
