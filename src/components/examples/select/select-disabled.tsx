import { Select, SelectOption } from "@/components/ui/select";

const SelectDisabled = () => {
  return (
    <div className="demo wrap">
      <Select placeholder="Select your favorite fruit...">
        <SelectOption value="apple">Apple</SelectOption>
        <SelectOption disabled value="carrot">
          Carrot
        </SelectOption>
        <SelectOption value="banana">Banana</SelectOption>
        <SelectOption value="broccoli">Broccoli</SelectOption>
      </Select>
      <Select placeholder="Select your favorite fruit..." disabled>
        <SelectOption value="apple">Apple</SelectOption>
        <SelectOption value="carrot">Carrot</SelectOption>
        <SelectOption value="banana">Banana</SelectOption>
        <SelectOption value="broccoli">Broccoli</SelectOption>
      </Select>
    </div>
  );
};

export default SelectDisabled;
