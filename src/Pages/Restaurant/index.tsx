import { useNavigate } from "react-router-dom";
import Back from "../../assets/icons/button-back.svg";
const Restaurant = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div
        onClick={() => {
          navigation("/");
        }}
        className="button-back"
      >
        <img src={Back} alt="" />
      </div>
      <h1>Aqui vai o restaurante selecionado</h1>
    </div>
  );
};

export default Restaurant;
