import "./style.css";

interface Rest {
  urlLogo: string;
  name: string;
  address: string;
}
interface PopularProsp {
  rest: Rest[];
}
const PopularRestaurants: React.FC<PopularProsp> = ({ rest }: PopularProsp) => {
  return (
    <div>
      <h2 className="title">
        Populares no <span className="jasonfoods">JASON FOODS</span>
      </h2>
      <div className="card--container">
        {rest.map((item) => (
          <div className="card">
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
