import React from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';
import './styles/pages_styles.css';

function HomePage() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/login');
    }

    return (
        <div className='main-container'>
            <h1>Home page !</h1>
            <p className='about-par'>
                Welcome to our project in Project Managment course 2023
            </p>
        </div>
    );
}
export default HomePage;
