import React from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/login');
    }

    return (
        <div>
            <h1>Home page !</h1>
        </div>
    );
}
export default HomePage;
