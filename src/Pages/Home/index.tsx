import React, { useEffect, useState } from "react";
import DetailsForm from "../RestaurantForm";
import Header from "../../components/Header";
import RestaurantForm from "../RestaurantForm";

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
    </div>
  );
};

export default Home;
