import "./style.css";
import Icon from "@/components/misc/icon";
import type { InputHTMLAttributes } from "react";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon?: string;
  prefix?: string;
  suffix?: string;
  supporting?: string;
  variant?: "filled" | "outlined";
  type?: "text" | "email" | "password" | "search" | "tel" | "url" | "number";
  error?: boolean;
  errorText?: string;
  noSpinner?: boolean;
};

const TextField = ({
  icon,
  label,
  prefix,
  suffix,
  supporting,
  variant = "outlined",
  error = false,
  errorText,
  noSpinner = false,
  placeholder,
  ...props
}: TextFieldProps) => {
  return (
    <div mui-text-field-wrapper="">
      <label mui-text-field={variant} data-error={error}>
        {icon && <Icon mui-text-field-icon="" name={icon} />}
        {prefix && <span mui-text-field-prefix="">{prefix}</span>}
        <span mui-text-field-label="">
          <span>{label}</span>
        </span>
        <input
          mui-text-field-input=""
          data-no-spinner={noSpinner}
          {...props}
          placeholder={placeholder || " "}
        />
        {suffix && <span mui-text-field-suffix="">{suffix}</span>}
      </label>
      {((error && errorText) || supporting) && (
        <span mui-text-field-supporting="">
          {error && errorText ? errorText : supporting}
        </span>
      )}
    </div>
  );
};

export default TextField;
