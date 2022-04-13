/* import React, { HTMLAttributes, useEffect, useState } from 'react'

import api from '../../services/api';
import './style.css'

interface Shop extends HTMLAttributes<HTMLDivElement> {
    id: string;
    name: string;
    address: string;
    urlLogo: string;
}

const Shop = ({ id, name, address, urlLogo, ...rest }: Shop) => {

    const [restaurants, setRestaurants] = useState();

    useEffect(() => {
        api.get('restaurants').then((response) => {
            setRestaurants(response.data)
        })
    }, []);
    console.log(restaurants)

    return (
        <div className='shop--listarea' {...rest}>
            <h2>{name}</h2>
            <div className='shop--list'>
                
            </div>

        </div>
    );
};

export default Shop; */

import { PopularRestaurant } from "../../Mocks/input";
import "./style.css";

const PopularRestaurants = () => {
    return (
        <div>
            <h2 className="title">Populares no <span className="jasonfoods">JASON FOODS</span></h2>
            <div className="card--container">
                {PopularRestaurant.map((item) => (
                    <div className="card">
                        <img className="card--image" src={item.urlImage} />
                        <p className="card--name">{item.name}</p>
                        <p className="card--description">{item.description}</p>
                        <p className="card--address">{item.address}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularRestaurants;
