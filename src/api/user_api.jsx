/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

import { async } from 'q';
import api from './api';


/* --- --- This File Contains API That User Allowed To Interact With --- --- */


/* --- This is Authentication API --- */

async function register(userJson) {
    return api.post("/auth/register", userJson);
};

async function login(userJson) {
    return api.post("/auth/login", userJson);
};

async function logout(userJson) {
    return api.post("/auth/logout", userJson);
};

async function deleteaccount(userJson) {
    return api.post("/auth/deleteaccount", userJson);
};

async function authToken() {
    return api.get("/authToken");
};


/* --- This is Post API --- */

async function create_post(userJson) {
    return api.post("post/create", userJson);
};

async function get_all_posts() {
    return api.get("post/get_all_posts");
};

async function get_all_posts_by_author(userJson) {
    return api.post("post/get_all_posts_by_author", userJson);
};

/* --- This is User API --- */
async function get_user_info_by_email(userAuthData) {
    return api.post("user/get_user_info_by_email", userAuthData);
}


/* --- DEBUG API --- */

async function get_all_users_mails() { // DEBUG ,TODO DELETE
    return api.get("/get_all_users_mails");
};


export default {
    register,
    login,
    deleteaccount,
    get_all_users_mails,  // DEBUG ,TODO DELETE
    authToken,
    create_post,
    get_all_posts,
    get_all_posts_by_author,
    get_user_info_by_email
};