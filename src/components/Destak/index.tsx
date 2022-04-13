import { RestaurantReady } from "../../Mocks/input";
import Selo from "../../assets/icons/selo.svg";
import "./style.css";
const Destak = () => {
  return (
    <div className="container-restaurant">
      {RestaurantReady.map((item) => (
        <div className="restaurant-img">
          <img id="selo" src={Selo} />
          <img src={item.urlImage} />
        </div>
      ))}
    </div>
  );
};

export default Destak;
