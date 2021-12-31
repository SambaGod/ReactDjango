import React from 'react';
import logo from '../assets/logo.png';

export default function Header() {
    return (
        <div className='header'>
            <img src={logo} alt="logo" width={150} />
        </div>
    )
}
