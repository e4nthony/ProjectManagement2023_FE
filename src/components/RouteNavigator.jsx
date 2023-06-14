/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */
import React, { useEffect, useState } from 'react';
import {
    // createBrowserRouter,
    // RouterProvider,
    Routes, Route
} from 'react-router-dom';


import NavBar from './Navbar';
/** --- Pages Imports --- */
import Page404 from './pages/Page404';
import Home from './pages/HomePage';
import PostInfo from './pages/PostInfo';
import Register from './pages/Register';
import Login from './pages/Login';
import About from './pages/About';
import PersonalArea from './pages/PersonalArea';
import EditInfo from './pages/EditInfo';
import Confirmanddel from './pages/confirmanddelet';
import CreatePost from './pages/CreatePost';
import Messenger from './pages/Messenger/Messenger';

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
                {/* <Route path='/personalarea' element={<PersonalArea />} /> */}
                <Route path='/user/:userEmail' element={<PersonalArea />} />
                <Route path='/post/:postId' element={<PostInfo />} />
                <Route path='/personalarea/editInfo' element={<EditInfo />} />
                <Route path='/personalarea/confirmanddelet' element={<Confirmanddel />} />
                <Route path='/CreatePost' element={<CreatePost />} />
                <Route path='/Messenger' element={<Messenger />} />
            </Routes>

            {/* <div className='devmessage'>
                default test message from RouteNavigator.jsx element (dev.info)
            </div> */}

            {/* <Footer /> */}

        </div>
    );
}

export default RouteNavigator;
