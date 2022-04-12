import React, { useEffect, useState } from "react";
import Shop from "../../components/Shop";

import API from "../../API";
import RestaurantForm from "../RestaurantForm";

const Home = () => {
  const [listRestaurants, setListRestaurants] = useState([]);

  /*  
    useEffect(() => {
    const loadAll = async () => {
      //pegando a lista inteira
      let list = await API.getHomeList();
      setListRestaurants(list)

      loadAll();
  }, []);
  
*/
  return (
    <div>
      {/* <section className='lists'>
        {listRestaurants.map((item, key) =>(
          <Shop key={key} title={item.title} items={item.items} />
        ))}
      </section> */}
    </div>
  );
};

export default Home;
