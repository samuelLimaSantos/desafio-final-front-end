import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Shop from '../../components/Shop';

import API from '../../API'

const Home = () => {

  const [listRestaurants, setListRestaurants] = useState([]);
  const [grayHeader, setGrayHeader] = useState(false)


/*  
    useEffect(() => {
    const loadAll = async () => {
      //pegando a lista inteira
      let list = await API.getHomeList();
      setListRestaurants(list)

      loadAll();
  }, []);
  
*/

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setGrayHeader(true)
      } else {
        setGrayHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);


  return (
    <div>
      <Header gray={grayHeader} />

      {/* <section className='lists'>
        {listRestaurants.map((item, key) =>(
          <Shop key={key} title={item.title} items={item.items} />
        ))}
      </section> */}

    </div>

  );
};

export default Home;
