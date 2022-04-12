import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Register from "../Register";

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Register />
      </div>
    </div>
  );
};

export default Home;
