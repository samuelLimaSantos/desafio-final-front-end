import React, { useEffect, useState } from "react";

//import RestaurantForm from "../RestaurantForm";
import Header from "../../components/Header";
import Recommended from "../../components/Recommended";
import PopularRestaurants from "../../components/PopularRestaurants";
import Footer from "../../components/Footer";

const Home = () => {
  
  const [grayHeader, setGrayHeader] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setGrayHeader(true);
      } else {
        setGrayHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);


  return (
    <div>
      <Header gray={grayHeader} />
      <Recommended />
      <PopularRestaurants />
      <Footer/>
    </div>
  );
};

export default Home;
