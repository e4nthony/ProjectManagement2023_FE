import React, { useContext, useEffect, useState } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import { AuthContext } from './components/AuthContext';
import user_model from './model/user_model';
import { UserContext } from './components/UserContext';

// import './App.css';     // style todo: upgrade/delete

/** Our Route Navigator */
import RouteNavigator from './components/RouteNavigator';

function App() {
    const [user, setUser] = useState('');
    const [authState, setAuthState] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const res = await user_model.authToken();
                console.log('useEffect.res: ' + res)
                if (res.data.error) {
                    setAuthState(false);
                    console.log('useEffect from navbar: ' + res.data.error);
                } else {
                    setAuthState(true);
                }

            } catch (err) {
                console.log('failed to log in user: ' + err);
            }
        })();
    }, []);

    return (
        <div>

            <React.StrictMode>
                <AuthContext.Provider value={{ authState, setAuthState }}>
                    <UserContext.Provider value={{ user, setUser }}>
                    <BrowserRouter>
                        <RouteNavigator />
                        {/* <div className='devmessage'>
                        default test message from App.jsx element (dev.info)
                    </div> */}
                    </BrowserRouter>
                    </UserContext.Provider>
                </AuthContext.Provider>
            </React.StrictMode>
        </div>
    );
}

export default App;
