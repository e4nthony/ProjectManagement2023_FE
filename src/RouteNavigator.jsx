/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete*/

import React, { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";

import {
    createBrowserRouter,
    RouterProvider,
    Routes, Route
} from "react-router-dom";

import LoginUI from './LoginUI';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world! 2</div>,
    },
]);


const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
};

const RouteNavigator = () => {

    useEffect(() => {
    }, []);

    return (
        <div>

            {/* <NavBar /> */}


            {/* <Router> */}
            {/* <Route path='*' element={<ErrorPage />} /> */}
            {/* <Route path={"http://localhost:4000/Index"} element={<LoginUI />} />
                <Route path={"http://localhost:4000/Home"} element={<LoginUI />} /> */}
            {/* <RouterProvider path={"http://localhost:4000/Login"} element={<LoginUI />} /> */}
            {/* <RouterProvider router={router} /> */}
            {/* </Router> */}

            {/* <Route path="/" element={<LoginUI />}>
                <Route path="" element={<LoginUI />} />
                <Route path="index" element={<LoginUI />} />
                <Route path="home" element={<LoginUI />} />
                <Route path="login" element={<LoginUI/>} />
            </Route> */}

            <div>
                <Routes>
                    <Route path="/" element={<LoginUI />} />
                    <Route path="/about" element={<LoginUI />} />
                </Routes>
                <div>default test message from RouteNavigator.jsx</div>
            </div>


            {/* <Footer /> */}

        </div>
    );
};

export default RouteNavigator;