/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

import user_api from '../api/user_api'


/* This service calls api functions (to write less logic at pages) */


async function register(userAuthData) {

    // /** Pack data to 'JSON' format to send via web*/
    // const data = {
    //     email: userAuthData.email,
    //     password: userAuthData.password // unencrypted/raw password
    // }


    try {
        const res = user_api.register(userAuthData);

        const statusCode = (await res).status;
        console.log('got response from server, status code: ' + statusCode);
        console.log('response: ' + JSON.stringify(res, null, 2));
        if (statusCode == 200) {
            console.log('user registered successfully: ' + JSON.stringify(userAuthData.email));
            return true
        }
    } catch (err) {
        console.log('user log in failed: ' + err);
    }
    return false
}


async function login (userAuthData) {
    console.log('trying log in...');

    /* Pack data to 'JSON' format to send via web */
    const data = {
        email: userAuthData.email,
        raw_password: userAuthData.password
    };

    let res;
    try {
        res = await user_api.login(data);
        console.log('res(authService): ' + res.status);
        if (res.status === 200) {
            console.log('user log in successfully: ' + userAuthData.email);
        } else if (res.status === 400) {
            console.log('user log in failed: ' + userAuthData.email);
        }
    } catch (err) {
        console.log('user log in failed: ' + err);
    }
    return res;
}


async function authToken () {
    let res;
    try {
        res = await user_api.authToken();
    } catch (err) {
        console.log('user log in failed: ' + err);
    }
    return res;
}


async function deletemyaccount (userAuthData) {
    // /** Pack data to 'JSON' format to send via web*/
    // const data = {
    //     email: userAuthData.email,
    //     password: userAuthData.password // unencrypted/raw password
    // }


    try {
        const res = user_api.deletemyaccount(userAuthData);

        console.log('user register successfully: ' + userAuthData.email);
    } catch (err) {
        console.log('user log in failed: ' + err);
    }
}


export default {
    register,
    login,
    authToken,
    deletemyaccount,
    // getAllUsers,
};
