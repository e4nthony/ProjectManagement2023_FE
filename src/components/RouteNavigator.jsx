import React, { useEffect, useState } from 'react';
import {
    // createBrowserRouter,
    // RouterProvider,
    Routes, Route
} from 'react-router-dom';

/** --- Pages Imports --- */
import Page404 from './pages/Page404';
import Home from './pages/HomePage';
import About from './pages/About';
import Login from './pages/Login';
import NavBar from './pages/Navbar';

function RouteNavigator() {

    /** todo: Implement later */
    // useEffect(() => {
    // }, []);

    return (

        <div>

            <NavBar />

            <Routes>
                <Route path='*' element={<Page404 />} />
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login />} />
            </Routes>

            {/* <div className='devmessage'>
                default test message from RouteNavigator.jsx element (dev.info)
            </div> */}

            {/* <Footer /> */}

        </div>
    );
}

export default RouteNavigator;
