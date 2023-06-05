/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

import user_api from '../api/user_api'


/* This service calls api functions (to write less logic at pages) */

/**
 * Packs data from cliend and sends register request
 * 
 * @param {*} userAuthData 
 * @returns res from server
 */
async function register(userAuthData) {
    console.log('authService: trying register...');

    /* userAuthData already packed in right format */

    try {
        const res = user_api.register(userAuthData);

        const statusCode = (await res).status;
        console.log('authService: got response from server, status code: ' + statusCode);
        console.log('authService: response: ' + JSON.stringify(res, null, 2));
        if (res.status === 200) {
            console.log('authService: user registered successfully: ' + JSON.stringify(userAuthData.email));
        } else if (res.status === 400) {
            console.log('authService: user registration failed: ' + JSON.stringify(userAuthData.email));
        }
    } catch (err) {
        console.log('authService: user registration failed: ' + err);
    }
    return res;
}

/**
 * Packs data from cliend and sends login request
 * 
 * @param {*} userAuthData  // {email, raw_password}
 * @returns res from server
 */
async function login(userAuthData) {
    console.log('authService: trying to log in...');

    /* Pack data to 'JSON' format to send via web */
    const data = {
        email: userAuthData.email,
        raw_password: userAuthData.password
    };

    let res;
    try {
        res = await user_api.login(data);
        console.log('authService: res: ' + res.status);
        if (res.status === 200) {
            console.log('authService: user log in successfully: ' + userAuthData.email);
        } else if (res.status === 400) {
            console.log('authService: user log in failed: ' + userAuthData.email);
        }
    } catch (err) {
        console.log('authService: user log in failed: ' + err);
    }
    return res;
}

/**
 * logout user and
 * sending request to server to delete existing token for this device
 * 
 * @param {*} userAuthData  // {email}
 * @returns res from server
 */
async function logout(userAuthData) {
    console.log('authService: trying log out...');

    /* Pack data to 'JSON' format to send via web */
    const data = {
        email: userAuthData.email
    };

    let res;
    try {
        res = await user_api.logout(data);

        //TODO

        // console.log(' res: ' + res.status);
        // if (res.status === 200) {
        //     console.log('user log in successfully: ' + userAuthData.email);
        // } else if (res.status === 400) {
        //     console.log('user log in failed: ' + userAuthData.email);
        // }
    } catch (err) {
        console.log('authService: user log in failed: ' + err);
    }
    return res;
}

/**
 * // todo: consider if need
 * @returns 
 */
async function authToken() {
    let res;
    try {
        res = await user_api.authToken();
    } catch (err) {
        console.log('authService: user log in failed: ' + err);
    }
    return res;
}

/**
 * 
 * @param {*} userAuthData 
 * @returns null
 */
async function deletemyaccount(userAuthData) {
    console.log('authService: trying to delete account...');

    //TODO

    try {
        const res = await user_api.deletemyaccount(userAuthData);

        //TODO

        console.log('authService: user register successfully: ' + userAuthData.email);
    } catch (err) {
        console.log('authService: user log in failed: ' + err);
    }
    return;
}


export default {
    register,
    login,
    logout,
    authToken,
    deletemyaccount,
    // getAllUsers,
};
