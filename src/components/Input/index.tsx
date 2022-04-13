import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({
  name,
  type,
  placeholder,
  required,
  value,
  onChange,
}: InputProps) => {
  return (
    <div className="input">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
