interface InputProps {
  name: string;
  type: string;
  required?: boolean;
  value: string | number;
  placeholder: string;
  onChange: () => void;
}

const Input = ({
  name,
  type,
  placeholder,
  required,
  value,
  onChange,
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
