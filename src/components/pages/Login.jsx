/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './pages.css';

import HomePage from './HomePage';
import login_api from '../../api/login_api';
import user_api from '../../api/user_api';
import api from '../../api/api';


function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    async function onLoginCallback() {
        console.log('setting the error message');
        setMessage('Invalid email or password');//dev, todo change
        
        const userData = {
            /** read values from fields */
            email: email,
            password: password,
        };

        console.log('userData'+ userData.toString() );
        console.log('trying to reach be server');
        console.log(userData.email);  // dev, delete

        // try {
        //     // const res = await login_api.login(userData);
        //     const res = await login_api.login();
        //     console.log('res' + res);

        //     const jsonValue = JSON.stringify(res)
        //     console.log('jsonValue: ' + jsonValue);
 
        //     setMessage(res.msg); 

        //     console.log('user logged in successfully: ' + userData.email);
        // } catch (err) {
        //     console.log('user cant login: ' + err);
        //     return res.status(400).send({ 'error': err });
        // }

        // NEXT LINES DEBUG PURPOSES ONLY, TODO DELETE
        
        try {
            const res = await user_api.get_all_users_mails();
            console.log('get_all_users_mails - res:' + res.toString() );

            const jsonValue = JSON.stringify(res)
            console.log('jsonValue: ' + jsonValue);
 
            setMessage(jsonValue); 

            console.log('user logged in successfully: ' + userData.email);
        } catch (err) {
            console.log('user cant login: ' + err);
            // return res.status(400).send({ 'error': err });
        }
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
    );
}

export default Login;
