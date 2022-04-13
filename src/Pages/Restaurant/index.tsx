import { useNavigate } from "react-router-dom";
import Back from "../../assets/icons/button-back.svg";
import { RestaurantReady } from "../../Mocks/input";
import "./style.css";
const Restaurant = () => {
  const navigation = useNavigate();

  const { name, urlImage, description, urlCover } = RestaurantReady[3];

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
      <div className="container-rest">
        <img className="url-cover" src={urlCover} />
        <div className="card-info">
          <div className="description">
            <img src={urlImage} alt="" />
            <h3>{name}</h3>
            <h5>{description}</h5>
          </div>
          <div>
            <h1>cardapio</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
