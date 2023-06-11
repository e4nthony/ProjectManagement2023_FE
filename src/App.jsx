/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

import React, { useEffect, useState } from 'react';
import {
    // createBrowserRouter,
    // RouterProvider,
    BrowserRouter
    // Routes,
    // Route
} from 'react-router-dom';

import styles from './components/styles/GlobalStyles.module.css';

/* Our Route Navigator */
import RouteNavigator from './components/RouteNavigator';

import authService from './services/authService';

import { AuthContext } from './components/AuthContext';

/* helps to print circular objects as string */
import { inspect } from 'util'; //DEBUG


function App() {
    const [authState, setAuthState] = useState(AuthContext);

    useEffect(() => {
        (async function localStorageValuesCheck() {

            try {
                /* load token from local storage */
                const token = localStorage.getItem('accessToken');
                const email = localStorage.getItem('activeUserEmail');

                if (!token || token === 'undefined' || !email || email === 'undefined') {
                    /* if token OR email not exists, abort validation process */
                    setAuthState(false);
                    return;
                }

                /* --- token exists, validate it using server side --- */
                const res = await authService.authToken();
                console.log('App: return from authService.authToken(): ' + inspect(res)) //DEBUG

                if (res.data.error) {
                    /* if server says that token invalid */
                    setAuthState(false);
                    
                    console.log('App: server says that token invalid, res.data.error: ' + inspect(res.data.error)); //DEBUG
                    return;
                }

                /* user is truly authorized */
                setAuthState(true);
            } catch (err) {
                console.log('App: user is not authenticated, ERROR: ' + err);
            }

        })();
    }, []);


    return (
        <div className={styles.background}>
            <div className={styles.full_height}>
            <React.StrictMode>
                <AuthContext.Provider value={{ authState, setAuthState }}>
                    <BrowserRouter>

                        <RouteNavigator />

                    </BrowserRouter>
                </AuthContext.Provider>
            </React.StrictMode>
            </div>
        </div>
    );
}

export default App;
