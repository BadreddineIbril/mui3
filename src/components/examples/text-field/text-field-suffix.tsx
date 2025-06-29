import TextField from "@/components/ui/text-field";

const TextFieldSuffix = () => {
  return (
    <div className="demo">
      <TextField
        label="Price"
        suffix="USD"
        noSpinner
        type="number"
        name="field-suffix-1"
      />
      <TextField
        variant="filled"
        label="Price"
        name="field-suffix-2"
        suffix="USD"
        noSpinner
        type="number"
      />
    </div>
  );
};

export default TextFieldSuffix;
