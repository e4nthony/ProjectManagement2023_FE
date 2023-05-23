/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

/* This is Authentication API */
import api from './api';

async function register(userJson) {
    return api.post("/auth/register", userJson);
};

async function login(userJson) {
    return api.post("/auth/login", userJson);
};

async function deleteaccount(userJson) {
    return api.post("/auth/deleteaccount", userJson);
};

async function get_all_users_mails() { // DEBUG ,TODO DELETE
    return api.get("/get_all_users_mails");
};

async function authToken() {
    return api.get("/authToken");
};

export default {
    register,
    login,
    deleteaccount,
    get_all_users_mails,  // DEBUG ,TODO DELETE
    authToken
};