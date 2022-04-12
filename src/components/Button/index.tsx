interface ButtonProps {
  name: "string";
  onClick: () => void;
}

const Button = ({ onClick, name }: any) => {
  return (
    <div>
      <button onClick={onClick}>{name}</button>
    </div>
  );
};

export default Button;
