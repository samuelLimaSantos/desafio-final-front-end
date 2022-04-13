import { RestaurantReady } from "../../Mocks/input";
import Selo from "../../assets/icons/selo.svg";
import "./style.css";
const Recommended = () => {
  return (
    <div>
      <h2 className="title">Famosos no <span className="jasonfoods">JASON FOODS</span></h2>
      <div className="container-restaurant">
        {RestaurantReady.map((item) => (
          <div className="restaurant-img">
            <img id="selo" src={Selo} />
            <img src={item.urlImage} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
