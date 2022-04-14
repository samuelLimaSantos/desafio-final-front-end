import "./style.css";
import { InputProduct } from "../../Mocks/input";
import Button from "../atom/Button";
import Input from "../atom/Input";
import axios from "../../service";
const ProductForm = ({ handleModal }: any) => {
  const sendData = async (e: any) => {
    try {
      e.preventDefault();
      const { name, urlImage, price, idRestaurant, description } =
        e.target.elements;
      const data: any = {
        name: name.value,
        urlImage: urlImage.value,
        price: price.value,
        idRestaurant: idRestaurant.value,
        description: description.value,
      };
      const resp = await axios.post("/rest/products", data);
      console.log(resp);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container-product">
      <button className="button--register--item" onClick={handleModal}>
        X
      </button>
      <h2>Registre um novo item</h2>
      <form className="container--form" onSubmit={sendData}>
        {InputProduct.map((item) => (
          <div className="container--input">
            <Input
              placeholder={item.placeholder}
              name={item.name}
              type={item.type}
            />
          </div>
        ))}
        <textarea
          name="description"
          id=""
          placeholder="Descrição do Produto"
        ></textarea>
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
