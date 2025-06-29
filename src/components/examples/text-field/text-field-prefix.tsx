import TextField from "@/components/ui/text-field";

const TextFieldPrefix = () => {
  return (
    <div className="demo">
      <TextField label="URL" prefix="https://" name="field-prefix-1" />
      <TextField
        variant="filled"
        label="URL"
        prefix="https://"
        name="field-prefix-2"
      />
    </div>
  );
};

export default TextFieldPrefix;
