import { useEffect, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Back from "../../assets/icons/button-back.svg";
import Button from "../../components/atom/Button";
import ProductForm from "../../components/ProductForm";
import axios from "../../service";
import { RestaurantType } from "../../types/Restaurant";
import "./style.css";

const Restaurant = () => {
  const navigation = useNavigate();

  const [restaurant, setRestaurant] = useState({} as RestaurantType);
  const [modal, setModal] = useState(false);
  const handleModal = ({}) => {
    setModal(!modal);
  };

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL' 
  });

  const location = useLocation();

  useEffect(() => {
    const restaurantState = location.state as any;

    if ("id" in restaurantState) {
      handleRestaurantData(restaurantState.id);
    }
  }, []);

  const handleRestaurantData = useCallback(async (restaurantId: string) => {
    const { data } = await axios.get(`rest/restaurants/${restaurantId}`);

    setRestaurant(data);
  }, []);

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
      {"id" in restaurant && (
        <div className="container-rest">
          <img className="url-cover" src={restaurant.urlCover} />
          <div className="card-info">
            <div className="description">
              <img src={restaurant.urlLogo} alt="" />
              <h1>{restaurant.name}</h1>
              <h5>{restaurant.description}</h5>
              <h6>Responsável: {restaurant.responsible}</h6>
            </div>
            <div className="menu-container">
              <h1>Cardápio</h1>
              <div className="scroll">
                {restaurant.products?.map((item) => (
                  <div className="menu">
                    <div className="menu-item">
                      <img src={item.urlImage} />
                      {item.name}
                    </div>
                    <p>Preço:R$ {formatter.format(item.price)}</p>
                    <div>
                      Extras:
                      {item.extras.map((extra) => (
                        <span>{extra.name}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <Button name="Adicionar item ao menu" onClick={handleModal} />
            </div>
          </div>
          {modal && (
            <ProductForm restaurant={restaurant.id} handleModal={handleModal} />
          )}
        </div>
      )}
    </div>
  );
};

export default Restaurant;
