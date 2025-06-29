import TextField from "@/components/ui/text-field";

const TextFieldError = () => {
  return (
    <div className="demo">
      <TextField
        label="Required"
        name="field-error-1"
        required
        error
        errorText="Please fill out this field."
      />
      <TextField
        variant="filled"
        label="Required"
        name="field-error-2"
        required
        error
        errorText="Please fill out this field."
      />
    </div>
  );
};

export default TextFieldError;
