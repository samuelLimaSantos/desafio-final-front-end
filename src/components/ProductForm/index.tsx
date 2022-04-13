import "./style.css";
import { InputProduct } from "../../Mocks/input";
import Button from "../Button";
import Input from "../Input";
const ProductForm = ({ handleModal }: any) => {
  return (
    <div className="container-product">
      <button onClick={handleModal}>X</button>
      <h1>Registre-se</h1>
      <form action="">
        {InputProduct.map((item) => (
          <div>
            <Input
              placeholder={item.placeholder}
              name={item.name}
              type={item.type}
            />
          </div>
        ))}
        <Button name=" Cadastrar" type="submit" />
      </form>
    </div>
  );
};

export default ProductForm;
