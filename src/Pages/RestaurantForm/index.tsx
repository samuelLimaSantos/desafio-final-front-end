import { InputRest } from "../../Mocks/input";
import "./style.css";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import Back from "../../assets/icons/button-back.svg";
import { useNavigate } from "react-router-dom";
import axios from "../../service";

const RestaurantForm = () => {
  const navigation = useNavigate();

  const sendData = async (e: any) => {
    try {
      e.preventDefault();
      const { name, address, urlLogo, urlCover, description, responsible } =
        e.target.elements;
      const data: any = {
        name: name.value,
        address: address.value,
        urlLogo: urlLogo.value,
        urlCover: urlCover.value,
        description: description.value,
        responsible: responsible.value,
      };
      const resp = await axios.post("/rest/restaurants", data);
      console.log(resp);
    } catch (err) {
      console.log(err);
    }
  };

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
          <form onSubmit={sendData}>
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

            <Button name="Cadastrar" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RestaurantForm;
