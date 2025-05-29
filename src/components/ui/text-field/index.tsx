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
  error,
  errorText,
  noSpinner,
  ...props
}: TextFieldProps) => {
  return (
    <div data-text-field={variant}>
      {icon && <Icon data-text-field-icon name={icon} />}
      {prefix && <span data-text-field-prefix>{prefix}</span>}
      <input
        data-text-field-input
        {...props}
        placeholder={props.placeholder || " "}
        data-no-spinner={noSpinner}
        data-error={error}
      />
      <label data-text-field-label htmlFor={props.id}>
        {label}
      </label>
      {suffix && <span data-text-field-suffix>{suffix}</span>}
      {((error && errorText) || supporting) && (
        <span data-text-field-supporting>
          {error && errorText ? errorText : supporting}
        </span>
      )}
    </div>
  );
};

export default TextField;
