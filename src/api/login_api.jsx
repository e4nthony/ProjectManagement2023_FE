/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

import React from 'react';
import api from './api';

async function login(dataJson) {

    const headers = {
        'Content-Type': 'application/json',
    };

    return api.post('/login', { headers }, dataJson );
    // return api.post('/login', { name: 'steve' }, { headers: { 'x-gigawatts': '1.21' } });
    // return fetch('https://projectmanagement2023.onrender.com/login', { name: 'steve' })
    // api.setHeaders( {'Content-Type': application/json} )
    // return api.post('http://127.0.0.1:3080', { name: 'steve' })
}

export default {
    // register, 
    login
};
