import Selo from "../../assets/icons/selo.svg";
import "./style.css";
import { useNavigate } from "react-router-dom";

interface Detach {
  urlLogo: string;
  id: string;
}

interface DestakProps {
  detach: Detach[];
}
const Recommended: React.FC<DestakProps> = ({ detach }: DestakProps) => {
  const navigation = useNavigate();
  return (
    <div className="container-restaurant">
      {detach.map((item) => (
        <div className="restaurant-img">
          <img id="selo" src={Selo} />
          <img
            src={item.urlLogo}
            onClick={() =>
              navigation(`/restaurant`, { state: { id: item.id } })
            }
          />
        </div>
      ))}
    </div>
  );
};

export default Recommended;
