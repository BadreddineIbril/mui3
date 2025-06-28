import { Select, SelectOption } from "@/components/ui/select";

const SelectDemo = () => {
  return (
    <div className="demo">
      <Select placeholder="Select your favorite fruit...">
        <SelectOption value="apple">Apple</SelectOption>
        <SelectOption value="carrot">Carrot</SelectOption>
        <SelectOption value="banana">Banana</SelectOption>
        <SelectOption value="broccoli">Broccoli</SelectOption>
      </Select>
    </div>
  );
};

export default SelectDemo;
