import { InputRest } from "../../Mocks/input";
import "./style.css";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import Button from "../../components/Button";

const RestaurantForm = () => {
  return (
    <div className="container">
      <div className="logo">
        <Logo />
      </div>
      <div className="container-form ">
        <div className="card-form">
          <h1>Registre-se</h1>
          <form>
            {InputRest.map((item) => (
              <Input
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
              />
            ))}
            <textarea
              name="description"
              id=""
              placeholder="Descrição do Restaurante"
            ></textarea>
            <Button name="Cadastrar" type="submit" onClick={() => {}} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RestaurantForm;
