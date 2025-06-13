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
    <div mui-text-field={variant}>
      {icon && <Icon mui-text-field-icon name={icon} />}
      {prefix && <span mui-text-field-prefix>{prefix}</span>}
      <input
        mui-text-field-input=""
        {...props}
        placeholder={props.placeholder || " "}
        data-no-spinner={noSpinner}
        data-error={error}
      />
      <label mui-text-field-label="" htmlFor={props.id}>
        {label}
      </label>
      {suffix && <span mui-text-field-suffix="">{suffix}</span>}
      {((error && errorText) || supporting) && (
        <span mui-text-field-supporting="">
          {error && errorText ? errorText : supporting}
        </span>
      )}
    </div>
  );
};

export default TextField;
