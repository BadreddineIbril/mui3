import TextField from "@/components/ui/text-field";

const TextFieldDemo = () => {
  return (
    <div className="demo">
      <TextField
        label="Text field"
        variant="filled"
        placeholder="Filled"
        supporting="Supporting text"
      />
      <TextField
        label="Text field"
        placeholder="Outlined"
        supporting="Supporting text"
      />
    </div>
  );
};

export default TextFieldDemo;
