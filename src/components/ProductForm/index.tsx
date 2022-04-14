import "./style.css";
import { InputProduct } from "../../Mocks/input";
import Button from "../atom/Button";
import Input from "../atom/Input";
const ProductForm = ({ handleModal }: any) => {
  return (
    <div className="container-product">
      <button className="button--register--item" onClick={handleModal}>
        X
      </button>
      <h2>Registre um novo item</h2>
      <form className="container--form" action="">
        {InputProduct.map((item) => (
          <div className="container--input">
            <Input
              placeholder={item.placeholder}
              name={item.name}
              type={item.type}
            />
          </div>
        ))}
        <Button
          className="button--register--item"
          name="Cadastrar"
          type="submit"
        />
      </form>
    </div>
  );
};

export default ProductForm;
