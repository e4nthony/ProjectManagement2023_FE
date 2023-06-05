/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

import {
    React, useState, useEffect, useContext
} from 'react';

import styles from './styles/NavbarStyles.module.css';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import DropDownProfile from './NavBarDropDownProfile';

/* helps to print circular objects as string */
import { inspect } from 'util'; //DEBUG

export default function Navbar() {
    const [selectedOption, setSelectedOption] = useState('');

    const { authState, setAuthState } = useContext(AuthContext);

    console.log('NavBar: AuthContext\'s authState: ' + inspect(authState)); //DEBUG

    const navigate = useNavigate();

    return (
        <nav className={styles.nav}>
            <a href='/'>BidZone</a>
            <ul>
                {!authState && (
                    <>
                        <li>
                            <a href='/login'>Login</a>
                        </li>
                        <li>
                            <a href='/register'>Register</a>
                        </li>
                    </>
                )}

                {authState && (<a href='/CreatePost'>Create Post</a>)}

                <li>
                    <a href='/about'>About</a>
                </li>

                {authState && (<DropDownProfile />)}
            </ul>
        </nav>
    );
}
