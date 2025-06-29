import TextField from "@/components/ui/text-field";

const TextFieldVariant = () => {
  return (
    <div className="demo">
      <TextField variant="outlined" label="Label text" name="field-outlined" />
      <TextField variant="filled" label="Label text" name="field-filled" />
    </div>
  );
};

export default TextFieldVariant;
