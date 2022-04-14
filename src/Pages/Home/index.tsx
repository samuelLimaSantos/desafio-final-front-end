import { useEffect, useState } from "react";
import axios from "../../service";
import Header from "../../components/Header";
import Recommended from "../../components/Recommended";
import PopularRestaurants from "../../components/PopularRestaurants";
import Footer from "../../components/Footer";

const Home = () => {
  const [detach, setDetach] = useState([]);
  const [rest, setRest] = useState([]);
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista inteira
      let list = await axios.get("/rest/restaurants");
      const detach = list.data.slice(0, 8);
      const rest = list.data.slice(8);
      const allRestaurant = list.data;
      setDetach(detach);
      setRest(rest);
    };
    loadAll();
  }, []);

  return (
    <div>
      <Header gray />
      <Recommended detach={detach} />
      <PopularRestaurants rest={rest} />
      <Footer />
    </div>
  );
};

export default Home;
