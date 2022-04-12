import React, { useState } from 'react'

import './style.css'


interface Shop {
    title: "string";
    items: [];
}

const Shop = ({ title, items }: any) => {
    return (
        <div className='shop--listarea'>
            <h2>{title}</h2>
            <div className='shop--list'>
                {items.results.length > 0 && items.results.map(({ item, key }: any) => (
                    <div key={key} className='shop--list--item'>
                        <img src={`https://DADOSMOCADOSTESTE${item.photo}`} alt={item.title} />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Shop;
