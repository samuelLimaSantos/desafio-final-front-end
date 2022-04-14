import { useNavigate } from "react-router-dom";

import "./style.css";

interface Rest {
  urlLogo: string;
  name: string;
  address: string;
  id: string;
}
interface PopularProps {
  rest: Rest[];
}
const PopularRestaurants: React.FC<PopularProps> = ({ rest }: PopularProps) => {
  const navigation = useNavigate();


  return (
    <div>
      <h2 className="title">
        Populares no <span className="jasonfoods">JASON FOODS</span>
      </h2>
      <div className="card--container">
        {rest.map((item) => (
          <div className="card" onClick={() => navigation(`/restaurant`, { state: { id: item.id } })}>
            <img className="card--image" src={item.urlLogo} />
            <p className="card--name">{item.name}</p>
            {/* <p className="card--description">{item.description}</p> */}
            <p className="card--address">{item.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularRestaurants;
