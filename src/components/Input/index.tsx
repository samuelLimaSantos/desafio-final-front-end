interface InputProps {
  name: string;
  type: string;
  required?: boolean;
  value?: string | number;
  placeholder?: string;
  onChange?: () => void;
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
