/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

import React, { useEffect, useState } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    BrowserRouter,
    Routes, Route
} from "react-router-dom";

// import './App.css';     // style todo: upgrade/delete

/** Our Route Navigator */
import RouteNavigator from "./components/RouteNavigator";

function App() {
    return (
        <div>
            <React.StrictMode>
                <BrowserRouter>
                    <RouteNavigator />
                    {/* <div className='devmessage'>
                        default test message from App.jsx element (dev.info)
                    </div> */}
                </BrowserRouter>
            </React.StrictMode>
        </div>
    );
}

export default App;
