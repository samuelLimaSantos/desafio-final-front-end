import { InputRest } from "../../Mocks/input";
import "./style.css";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import Back from "../../assets/icons/button-back.svg";
import { useNavigate } from "react-router-dom";

const RestaurantForm = () => {
  const navigation = useNavigate();
  return (
    <div className="container">
      <div
        onClick={() => {
          navigation("/");
        }}
        className="button-back"
      >
        <img src={Back} alt="" />
      </div>
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
