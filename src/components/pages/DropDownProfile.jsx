/* eslint-disable */
import React, { useState, useContext } from 'react';
import './styles/DropDownProfile.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import profilePic from '../../../src/pictures/profilePic.png';

function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const { setAuthState, authState } = useContext(AuthContext);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    function PersonalArea() {
        setIsOpen(false);
        navigate('/PersonalArea');
    }

    function MyChats() {
        setIsOpen(false);
        navigate('/MyChats');
    }

    function logout() {
        localStorage.removeItem('accessToken');
        setAuthState(false);
        setIsOpen(false);
        navigate('/login');
    }

    return (
        <div className="dropdown-menu">

            {authState && (<button type='button' className="dropdown-toggle" onClick={toggleMenu}><img style={{ width: '25px', height: '25px' }} src={profilePic} alt="" /></button>)}
            {isOpen && (
                <ul className="dropdown-options">
                    <li onClick={() => PersonalArea()}>Personal area</li>
                    <li onClick={() => MyChats()}>My chats</li>
                    <li onClick={() => logout()}>Logout</li>
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;
