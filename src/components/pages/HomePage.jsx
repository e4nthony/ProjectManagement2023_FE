
/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';
import './styles/pages_styles.css';
import logo from '../../pictures/BidZone-logo.png';

function HomePage() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/login');
    }

    return (
        <div className='main-container'>
            <h1>Home page !</h1>
            <img src={logo} alt='' />
            <p className='about-par' style={{ color: 'black' }}>
                Welcome to our project in Project Managment course 2023
            </p >
        </div>
    );
}
export default HomePage;
