/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete*/

import React, { useEffect, useState } from 'react';
import {
    // createBrowserRouter,
    // RouterProvider,
    Routes, Route
} from "react-router-dom";

/** --- Pages Imports --- */
import Page404 from './pages/Page404';
//home
import About from './pages/About';
import Login from './pages/Login';


const RouteNavigator = () => {

    /** todo: Implement later */
    // useEffect(() => {
    // }, []);

    return (
        <div>

            {/* <NavBar /> */}

            <Routes>
                <Route path='*' element={<Page404/>} />
                <Route path="/" element={<About />} />
                <Route path="/home" element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
            </Routes>

            <div>default test message from RouteNavigator.jsx element (dev.info)</div>

            {/* <Footer /> */}

        </div>
    );
};

export default RouteNavigator;