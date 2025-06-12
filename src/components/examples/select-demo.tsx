import { Select, SelectOption } from "@/components/ui/select";

const SelectDemo = () => {
  return (
    <div className="demo">
      <Select placeholder="Select a fruit.." style={{ width: "250px" }}>
        <SelectOption value="apple">Apple</SelectOption>
        <SelectOption value="orange">Orange</SelectOption>
        <SelectOption value="kiwi">Kiwi</SelectOption>
        <SelectOption value="banana">Banana</SelectOption>
      </Select>
      <Select
        placeholder="Select a fruit.."
        disabled
        style={{ width: "250px" }}>
        <SelectOption value="apple">Apple</SelectOption>
        <SelectOption value="orange">Orange</SelectOption>
        <SelectOption value="kiwi">Kiwi</SelectOption>
        <SelectOption value="banana">Banana</SelectOption>
      </Select>
    </div>
  );
};

export default SelectDemo;
