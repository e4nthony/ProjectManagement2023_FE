/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './pages.css';

import HomePage from './HomePage';


function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    function onLoginCallback() {

        setMessage('Invalid email or password'); //dev, delete

        // let email1 = email; // dev, delete


        // const user = {
        //     email: email,
        //     password: password,
        // };

        // console.log('usefthfrthr'); 
        // console.log(user.email);  // dev, delete
    }

    function backClick() {
        navigate('/home');
    }

    return (
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

                        <div className='margin-around'>
                            <input id='email'
                                className='input-field-name'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className='margin-around'>
                            <input id='password'
                                className='input-field-password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
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
    );
}

export default Login;
