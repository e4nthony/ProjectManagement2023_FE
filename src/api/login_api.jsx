import React from 'react';
import api from './api';

async function login(dataJson) {
    return api.post('/login', dataJson);
}

export default {
    // register,
    login
};
