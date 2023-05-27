/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/login_styles.module.css';
import { AuthContext } from '../AuthContext'

// import HomePage from './HomePage';
// import user_api from '../../api_api';
// import api from '../../api/api';

import user_model from '../../model/user_model.jsx';
import { is } from '@babel/types';

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const { setAuthState } = useContext(AuthContext);
    const [islogin, setIsLoggedIn] = useState(false);
    const [id, setid] = useState("");
    async function onLoginCallback() {

        const userAuthData = {
            /** read values from fields */
            email: email,
            password: password,
        };

        console.log('userData: ' + userAuthData.toString());
        console.log('trying to reach back-end server...');
        console.log(userAuthData.email);  // debug, todo delete

        function showError(err_msg = 'Invalid email or password') {
            console.log('setting the error message: ' + err_msg);
            setMessage(err_msg);
        }
        showError('');

        if (email == '' || password == '') {
            showError('Please fill all fields');
            return;
        }

        function isValidEmail(email) {
            return email.includes('@') && email.includes('.')
        }

        if (!isValidEmail(email)) {
            showError('Please input a valid Email');
            return;
        }

        if (password.length < 6) {
            /* this password cannot be valid */
            showError('Password is too short, please enter password from 6 to 18 characters');
            return;
        }

        try {
            // let tokens = await UserModel.login(user); // todo? get tokens to stay signed in
            const res = await user_model.login(userAuthData);
            if (res.data.error || !res.data.accessToken) {
                console.log("no data," + JSON.stringify(res, null, 2))
                setAuthState(false);
                setMessage(res.data.error);
            } else {
                console.log("got token: " + JSON.stringify(res.data.accessToken, null, 2))
                setMessage("");
                localStorage.setItem("accessToken", res.data.accessToken);
                setAuthState(true);
                navigate('/');
            }

        } catch (err) {
            console.log("failed to log in user: " + err);
        }
    }

    function backClick() {
        navigate('/home');
    }

    return (
        <form>
            <div className={styles.mainContainer}>
                <div className={styles.subMainContainer}>

                    <div>
                        {/* <div className='imgs'>
            <div className='container-image'>
            </div>
          </div> */}
                        <div>

                            <h1 className={styles.textTittle}>Login Page</h1>

                            <div className={styles.marginAround}>
                                <text id='message' className='message-text'>
                                    {message}
                                </text>
                            </div>


                            <div className={styles.alignLeft}>
                                <div className={styles.marginAround1}>
                                    <div>
                                        <label for='email' className={styles.simpleLabel}><b>Email: </b></label>
                                    </div>
                                    <input id='email'
                                        className={styles.inputFieldName}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className={styles.marginAround1}>
                                    <div>
                                        <label for='password' className={styles.simpleLabel}><b>Password: </b></label>
                                    </div>
                                    <input id='password'
                                        type='password'
                                        className={styles.inputFieldPassword}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>


                            <div className={styles.marginAround}>
                                <button type="button" className={styles.loginButton} onClick={onLoginCallback}>Login</button>
                            </div>

                            <p className='link'>
                                <a href='#'>
                                    Forgot password ?
                                </a>

                                <a> or </a>

                                <a href='#'>
                                    Sign Up
                                </a>
                            </p>

                            <div className={styles.marginAround}>
                                <button type="button" className={styles.loginButton} onClick={backClick}>Back</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </form>
    );
}

export default Login;
