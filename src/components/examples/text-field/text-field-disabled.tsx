import TextField from "@/components/ui/text-field";

const TextFieldDisabled = () => {
  return (
    <div className="demo">
      <TextField
        label="Label text"
        icon="person"
        name="field-disabled-1"
        disabled
      />
      <TextField
        variant="filled"
        label="Label text"
        icon="person"
        name="field-disabled-2"
        disabled
      />
    </div>
  );
};

export default TextFieldDisabled;
