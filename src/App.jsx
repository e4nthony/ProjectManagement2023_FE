import React, { useEffect, useState } from 'react';
import {
    // createBrowserRouter,
    // RouterProvider,
    BrowserRouter
    // Routes,
    // Route
} from 'react-router-dom';
import { AuthContext } from './components/AuthContext';
import user_model from './model/user_model';
// import './App.css';     // style todo: upgrade/delete
import styles from './components/pages/styles/global_styles.module.css';

/** Our Route Navigator */
import RouteNavigator from './components/RouteNavigator';

function App () {
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
        <div className={styles.background}>

        <React.StrictMode>
          <AuthContext.Provider value={{ authState, setAuthState }}>
            <BrowserRouter>
              <RouteNavigator />
              {/* <div className='devmessage'>
                        default test message from App.jsx element (dev.info)
                    </div> */}
            </BrowserRouter>
          </AuthContext.Provider>
        </React.StrictMode>
      </div>
    );
}

export default App;
