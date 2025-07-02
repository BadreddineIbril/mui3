import { Select, SelectOption } from "@/components/ui/select";

const SelectVariant = () => {
  const variants: Array<"outlined" | "filled"> = ["outlined", "filled"];

  return (
    <div className="demo wrap">
      {variants.map((variant) => (
        <Select
          key={variant}
          variant={variant}
          placeholder="Select your favorite fruit...">
          <SelectOption value="apple">Apple</SelectOption>
          <SelectOption value="carrot">Carrot</SelectOption>
          <SelectOption value="banana">Banana</SelectOption>
          <SelectOption value="broccoli">Broccoli</SelectOption>
        </Select>
      ))}
    </div>
  );
};

export default SelectVariant;
