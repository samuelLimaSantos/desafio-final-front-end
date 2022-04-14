import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Back from "../../assets/icons/button-back.svg";
import Button from "../../components/Button";
import ProductForm from "../../components/ProductForm";
import { RestaurantReady } from "../../Mocks/input";
import "./style.css";

const Restaurant = () => {
  const navigation = useNavigate();

  const { name, urlImage, description, urlCover, menu } = RestaurantReady[2];
  const [modal, setModal] = useState(false);
  const handleModal = ({}) => {
    setModal(!modal);
  };
  const location = useLocation();
  console.log(location);
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
            <h1>{name}</h1>
            <h5>{description}</h5>
          </div>
          <div className="menu-container">
            <h1>Cardápio</h1>
            <div className="scroll">
              {menu?.map((item) => (
                <div className="menu">
                  <div className="menu-item">
                    <img src={item.img} />
                    {item.nome}
                  </div>
                  <p>Preço:R$ {item.price},00</p>
                </div>
              ))}
            </div>
            <Button name="Adicionar item ao menu" onClick={handleModal} />
          </div>
        </div>
        {modal && <ProductForm handleModal={handleModal} />}
      </div>
    </div>
  );
};

export default Restaurant;
