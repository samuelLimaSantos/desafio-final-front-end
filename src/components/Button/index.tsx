interface ButtonProps {
  name: string;
  onClick: () => void;
  type: any;
}

const Button = ({ onClick, name, type }: ButtonProps) => {
  return (
    <div>
      <button type={type} onClick={onClick}>
        {name}
      </button>
    </div>
  );
};

export default Button;
