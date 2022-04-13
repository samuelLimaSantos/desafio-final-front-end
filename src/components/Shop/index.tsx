import React, { HTMLAttributes, useEffect, useState } from 'react'

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

export default Shop;
