/* eslint-disable */
import React, { useState, useContext } from 'react';
import styles from './styles/NavBarDropDownProfile.module.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import profilePic from '../../src/pictures/profilePic.png';

/* helps to print circular objects as string */
import { inspect } from 'util'; //DEBUG

function DropdownMenu() {
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const { authState, setAuthState } = useContext(AuthContext);

    console.log('NavBarDDP: AuthContext: ' + inspect(authState)); //DEBUG

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
        //TODO?: move logic to services
        localStorage.clear();
        // localStorage.removeItem('accessToken');
        setAuthState(false);
        setIsOpen(false);
        navigate('/login');
    }

    return (
        <div className={styles.dropdownMenu}>

            {authState && (

                <button type='button' className={styles.dropdownToggle} onClick={toggleMenu}>
                    <img style={{ width: '25px', height: '25px' }} src={profilePic} alt="" />
                </button>

            )}

            {isOpen && (
                <ul className={styles.dropdownOptions}>
                    <li onClick={() => PersonalArea()}>Personal area</li>
                    <li onClick={() => MyChats()}>My chats</li>
                    <li onClick={() => logout()}>Logout</li>
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;
