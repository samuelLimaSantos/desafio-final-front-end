import React from 'react';
import jason_foods from '../../assets/jasonfoods.png';
import icon_foods from '../../assets/fastdelivery.png';

import './style.css'

export default ({ gray } : any) => {
    return(
        <header className={gray ? 'gray' : ''}>

            <div className='header--logo'>
                <a href='/'>
                    <img src={jason_foods} alt='jason foods logo' />
                    
                        <img src={icon_foods} alt='icon-foods' id="run"/>                    
                </a>
            </div>
            <div className='header--button'>
                <a href='/cadastrar'>
                    Cadastrar
                </a>
            </div>
        </header>
    )
}