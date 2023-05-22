/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/login_styles.css';
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

            console.log("trying log in...")
            // let tokens = await UserModel.login(user); // todo? get tokens to stay signed in
            const res = await user_model.login(userAuthData);
            if (res.data.error) {
                setAuthState(false);
                setMessage(res.data.error);
            } else {
                setMessage("");
                localStorage.setItem("accessToken", res.data);
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
            <div className='main-container'>
                <div className='sub-main-container'>

                    <div>
                        {/* <div className='imgs'>
            <div className='container-image'>
            </div>
          </div> */}
                        <div>

                            <h1 className='text-tittle'>Login Page</h1>

                            <div className='margin-around'>
                                <text id='message' className='message-text'>
                                    {message}
                                </text>
                            </div>


                            <div className='aliightnleft'>
                                <div className='margin-around1'>
                                    <div>
                                        <label for='email' className='simplelabel'><b>Email: </b></label>
                                    </div>
                                    <input id='email'
                                        className='input-field-name'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className='margin-around1'>
                                    <div>
                                        <label for='password' className='simplelabel'><b>Password: </b></label>
                                    </div>
                                    <input id='password'
                                        type='password'
                                        className='input-field-password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>


                            <div className='margin-around'>
                                <button type="button" className='login-button' onClick={onLoginCallback}>Login</button>
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

                            <div className='margin-around'>
                                <button type="button" className='login-button' onClick={backClick}>Back</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </form>
    );
}

export default Login;
