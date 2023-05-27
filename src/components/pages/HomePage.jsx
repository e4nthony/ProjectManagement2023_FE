/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';
import './styles/home_styles.module.css';
import logo from '../../pictures/BidZone-logo.png';

function HomePage() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/login');
    }

    return (
        <div>
            <img src={logo} alt='' />
        </div>
    );
}
export default HomePage;
