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

async function edit_info(userAuthData) {
    console.log(userAuthData.email);
    console.log(userAuthData.existEmail);
    return api.post("/user/edit_info", userAuthData);
};

/* --- This is User API --- */
async function get_user_info_by_email(userAuthData) {
    return api.post("user/get_user_info_by_email", userAuthData);
}

async function follow(data) {
    return api.post("/user/follow", data);
};

async function isfollow(data) {
    return api.post("/user/isfollow", data);
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

async function get_post_by_id(userJson) {
    return api.post("post/get_post_by_id", userJson);
};

// async function edit_info(userAuthData) {
//     return api.post("user/edit_info", userAuthData);   
// };

/* --- DEBUG API --- */

async function get_all_users_mails() { // DEBUG ,TODO DELETE
    return api.get("/get_all_users_mails");
};


export default {

    /* Auth */
    register,
    login,
    deleteaccount,
    get_all_users_mails,  // DEBUG ,TODO DELETE
    authToken,

    /* User Info */
    edit_info,
    get_user_info_by_email,
    follow,
    isfollow,

    /* Posts */
    create_post,
    get_all_posts,
    get_all_posts_by_author,
    get_post_by_id,
};