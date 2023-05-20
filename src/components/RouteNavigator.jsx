/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */
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
import Register from './pages/Register';
import PersonalArea from './pages/PersonalArea';
import EditInfo from './pages/EditInfo';
import Confirmanddel from './pages/confirmanddelet';
function RouteNavigator() {

    /** todo: Implement later */
    // useEffect(() => {
    // }, []);
//bool-login
    return (

        <div>

            <NavBar />
            <Routes>
                <Route path='*' element={<Page404 />} />
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/personalarea' element={<PersonalArea />} />
                <Route path='/personalarea/editInfo' element={<EditInfo />} />
                <Route path='/personalarea/confirmanddelet' element={<Confirmanddel/>} />
            </Routes>

            {/* <div className='devmessage'>
                default test message from RouteNavigator.jsx element (dev.info)
            </div> */}

            {/* <Footer /> */}

        </div>
    );
}

export default RouteNavigator;
