import React from 'react';
import { useNavigate } from 'react-router-dom';
import './pages.css';

import HomePage from './HomePage';


function Login() {
    const navigate = useNavigate();

    function loginClick() {
        // navigate('/home');
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
                            <input className='input-field-name' />
                        </div>

                        <div className='margin-around'>
                            <input className='input-field-password' />
                        </div>

                        <div className='margin-around'>
                            <button type="button" className='login-button' onClick={loginClick}>Login</button>
                        </div>

                        <p className='link'>
                            <a href='#'>
                                Forgot password ?
                            </a>
                            or
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
