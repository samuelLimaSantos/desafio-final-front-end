import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Restaurant from "./Pages/Restaurant";
import Home from "./Pages/Home";


const App = () => {

    const [listRestaurants, setListRestaurants] = useState([]);
    const [grayHeader, setGrayHeader] = useState(false)


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
        <div className="app--page">

            <BrowserRouter>
                <Header gray={grayHeader} />
                
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/restaurant' element={<Restaurant />} />
                </Routes>
                {/* <section className='lists'>
            {listRestaurants.map((item, key) =>(
              <Shop key={key} title={item.title} items={item.items} />
            
              ))}
          </section> */}
            </BrowserRouter>
        </div>

    );
};

export default App;