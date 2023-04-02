/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete*/
import React, { useEffect, useState } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    BrowserRouter,
    Routes, Route
} from "react-router-dom";


import logo from './logo.svg';
import './App.css';

import LoginUI from './LoginUI';
import RouteNavigator from "./RouteNavigator";


/** TAG: Backend_connect , 2 lines*/
const paramsURL = "http://localhost:4000/getparams";
// import Nav from "./Nav";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world! 2</div>,
    },
]);

// const router1 = createBrowserRouter([
//     {
//         path: "/",
//         element: <LoginUI />,
//     },
// ]);


function App() {





    // <React.StrictMode>
    //     <RouterProvider router={router} />
    //     <RouterProvider router={routerf} />
    // </React.StrictMode>



    // useEffect(() => {
    //     fetchItems();
    // }, []);

    // const [items, setItems] = useState([]);

    // const fetchItems = async () => {
    //     const data = await fetch('/b');
    //     const items = await data.json();
    //     setItems(items);
    // };

    // const [count, setCount] = useState(0);

    // /** TAG: Backend_connect */
    // const getParamsBE = async () => {

    //     try {
    //         const res = await get(paramsURL);

    //         console.log(str(res.data));

    //         return {
    //             param1: res.param1,
    //             param2: res.param2,
    //             param3: res.param3
    //         };

    //     } catch (err) {
    //         return console.log(err);
    //     }

    // };


    return (
        <div>
            <React.StrictMode>
                <BrowserRouter>
                    <RouteNavigator/>
                    <div>default test message from app.jsx</div>
                </BrowserRouter>
                {/* <RouterProvider router={router} /> */}
            </React.StrictMode>
        </div>


        // <div>
        //     <React.StrictMode>
        //         <div>123</div>
        //         <RouterProvider router={router} />
        //         <RouterProvider router={router} />
        //         <RouterProvider router={router1} />
        //     </React.StrictMode>
        // </div>



        // <BrowserRouter>
        //     <Nav/>
        // </BrowserRouter>



        // <section>
        //     <header className="App-header">
        //         <img src={logo} className="App-logo w-80" alt="logo" />
        //         <p>
        //             Edit <code>src/App.js</code> and save to reload 1.
        //         </p>
        //         <p>
        //             Edit 11111 text.
        //         </p>
        //         <div>
        //             <p>You clicked
        //                 {/* {count} */}
        //                 times</p>
        //             <button onClick={() => setCount(count + 1)}>
        //                 Click me
        //             </button>
        //         </div>

        //         {items.map(item => (
        //             <div>
        //                 <p>
        //                     Edit 22222 text.
        //                 </p>
        //                 <p>
        //                     Edit 33333 text.
        //                 </p>
        //                 <div>
        //                     <h6>{item.param1}</h6>
        //                     <p>{item.param2}</p>
        //                     <p><i>blabla {item.param3}</i></p>
        //                 </div>
        //             </div>
        //         ))
        //         }
        //     </header>
        // </section >



        // <div className="App">
        //     <header className="App-header">
        //         <img src={logo} className="App-logo" alt="logo" />
        //         <p>
        //             Edit <code>src/App.js</code> and save to reload.
        //         </p>
        //         <a
        //             className="App-link"
        //             href="https://reactjs.org"
        //             target="_blank"
        //             rel="noopener noreferrer"
        //         >
        //             Learn React
        //         </a>
        //     </header>
        // </div>
    );
}

export default App;
