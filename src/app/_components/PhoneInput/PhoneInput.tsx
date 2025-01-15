import React from "react";
import PhoneInput, { Value } from "react-phone-number-input";
import "react-phone-number-input/style.css";
interface PhoneNumberInputProps {
  value: Value;
  onChange: (value: Value) => void;
  placeholder?: string;
  defaultCountry?: any;
  disabled?: boolean;
}
const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  value,
  onChange,
  placeholder = "Enter phone number",
  defaultCountry = "SA",
  disabled = false,
}) => {
  return (
    <div className="phone-number-input">
      <div className="border border-[#4C6275] rounded-md p-[6px] pl-2">
        <PhoneInput
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          defaultCountry={defaultCountry}
          disabled={disabled}
          className="!border-0 !focus:ring-0 !focus:outline-none placeholder:text-xs text-[#4C6275]"
          style={{ border: "none", outline: "none" }}
        />
      </div>
      <style jsx>{`
        .phone-number-input {
          display: flex;
          flex-direction: column;
        }
        .error-text {
          color: red;
          font-size: 0.85rem;
          margin-top: 0.25rem;
        }
      `}</style>
    </div>
  );
};
export default PhoneNumberInput;