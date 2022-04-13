import { useNavigate } from "react-router-dom";
import Back from "../../assets/icons/button-back.svg";
const Restaurant = () => {
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
    </div>
  );
};

export default Restaurant;
