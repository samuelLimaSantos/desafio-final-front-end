import React, { HTMLAttributes, useEffect, useState } from 'react'

import api from '../../services/api';

import './style.css'


interface Shop extends HTMLAttributes<HTMLDivElement>{
    items: [];
}

const Shop = ({ items }: Shop) => {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        api.get('restaurants').then(({data}) => {
            setRestaurants(data)
        })
    }, []);
    console.log(restaurants)

    return (
        <div className='shop--listarea'>
            <h2>{items}</h2>
            <div className='shop--list'>
                {restaurants?.map((restaurant, key) => ({
                    
                }))}
            </div>

        </div>
    );
};

export default Shop;
