import React from 'react';
import FreeCodeCampLogo from '../img/FreeCodeCampLogo.png';
import '../styleSheets/Logo.css';

const Logo = () => (
    <div className='logo-container'>
        <img 
        className='logo'
        src={FreeCodeCampLogo}
        alt='Logo de FreeCodeCamp'/>
    </div>
);

export default Logo;