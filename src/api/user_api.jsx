/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

/* This is Authentication API */
import api from './api';

/* Get token from device storage if exists */
let token = localStorage.getItem('accessToken')

if (!token){
    token = ''
}
api.setHeaders({'Authorization': 'jwt' + token})

async function register(userJson) {
    return api.post("/auth/register", userJson);
};

async function login(userJson) {
    return api.post("/auth/login", userJson);
};

async function get_all_users_mails() { // DEBUG ,TODO DELETE
    return api.get("/get_all_users_mails");
};

export default {
    register,
    login,
    get_all_users_mails,// DEBUG ,TODO DELETE
};