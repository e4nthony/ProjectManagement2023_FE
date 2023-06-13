/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import login_styles from './styles/LoginStyles.module.css';
// import global_styles from '../styles/GlobalStyles.module.css';
import { AuthContext } from '../AuthContext'
import UserContext from '../UserContext';

// import HomePage from './HomePage';
// import user_api from '../../api_api';
// import api from '../../api/api';

import authService from '../../services/authService';
import { is } from '@babel/types';

function Login() {
    const navigate = useNavigate();

    /* import here setAuthState function */
    const { setAuthState } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
   
    // const [islogin, setIsLoggedIn] = useState(false);
    // const [id, setid] = useState('');


    async function onLoginCallback() {

        const userAuthData = {
            /* reads values from fields */
            email: email,
            password: password,
        };

        console.log('LoginPage: userData: ' + userAuthData.toString());
        console.log('LoginPage: userAuthData.email:' + userAuthData.email);  // debug, todo delete

        function showError(err_msg = 'Invalid email or password') {
            console.log('LoginPage: Setting the error message: ' + err_msg);
            setMessage(err_msg);
        }
        showError('');

        if (email == '' || password == '') {
            /* one or both fields are epmty. */
            showError('Please fill all fields');
            return;
        }

        function isValidEmail(email) {
            //TODO ?improove email check?
            return email.includes('@') && email.includes('.')
        }
        if (!isValidEmail(email)) {
            showError('Please input a valid Email');
            return;
        }

        if (password.length < 6) {
            /* this password cannot be valid, don't send it to server */
            showError();  // default error
            return;
        }

        /* try to login */
        try {
            // let tokens = await UserModel.login(user); // todo? get tokens to stay signed in
            console.log('LoginPage: trying to reach back-end server...');
            const res = await authService.login(userAuthData);

            if (!res.data || res.data.error || !res.data.accessToken) {
                /* if there is error or corrupted request */
                console.log('LoginPage: no data,' + JSON.stringify(res, null, 2));
                setMessage(res.data.error);
                setAuthState(false);
                return;
            }

            console.log('LoginPage: got token: ' + JSON.stringify(res.data.accessToken, null, 2));
            setMessage('');  /* no error to show to user */
            localStorage.clear();  /* clears local storage from previous user */
            localStorage.setItem('activeUserEmail', email);
            localStorage.setItem('accessToken', res.data.accessToken);
            const user = await authService.get_user_info_by_email(email);
            localStorage.setItem('id' , user.data.user_info._id);
           

            /* force update of the AuthContext's default value. */
            setAuthState(true);

            navigate('/');

        } catch (err) {
            console.log('failed to log in user: ' + err);
        }

        return true;
    }

    function backClick() {
        navigate('/home');
    }

    return (
        <form className={login_styles.log}>
            <div>

                <h1 className={login_styles.textTittle}>Login Page</h1>

                <div className={login_styles.marginAround}>
                    <text id='message' className='message-text'>
                        {message}
                    </text>
                </div>


                <div className={login_styles.alignLeft}>
                    <div className={login_styles.marginAround1}>
                        <div>
                            <label for='email'>Email:</label>
                        </div>
                        <input id='email'
                            className={login_styles.inputFieldName}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className={login_styles.marginAround1}>
                        <div>
                            <label for='password'>Password:</label>
                        </div>
                        <input id='password'
                            type='password'
                            className={login_styles.inputFieldPassword}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>


                <div className={login_styles.marginAround}>
                    <button type='button' className={login_styles.loginButton} onClick={onLoginCallback}>Login</button>
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

                <div className={login_styles.marginAround}>
                    <button type='button' className={login_styles.loginButton} onClick={backClick}>Back</button>
                </div>

            </div>
        </form>
    );
}

export default Login;
