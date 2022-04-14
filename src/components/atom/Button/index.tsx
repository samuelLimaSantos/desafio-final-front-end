import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

const Button = ({ name, ...rest }: ButtonProps) => {
  return (
    <div>
      <button {...rest}>{name}</button>
    </div>
  );
};

export default Button;
