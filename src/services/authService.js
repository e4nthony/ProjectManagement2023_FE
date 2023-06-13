/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

import { async } from 'q';
import user_api from '../api/user_api'


/* This service calls api functions (to write less logic at pages) */

/**
 * 
 * @param {*} userAuthData 
 * @returns res from server
 */
async function register(userAuthData) {
    console.log('authService: trying register...');

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
        console.log('user log in failed: ' + err);
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
        console.log('user log in failed: ' + err);
    }
    return res;
}

/**
 * 
 * @param {*} userAuthData 
 * @returns null
 */
async function deletemyaccount(email) {
    console.log('authService: trying to delete account...');

    //TODO

    try {
        const res = await user_api.deletemyaccount(userAuthData);

        //TODO

        console.log('user register successfully: ' + userAuthData.email);
    } catch (err) {
        console.log('user log in failed: ' + err);
    }
    return;
}

async function get_user_info_by_email(userAuthData)
{
    console.log('authService: trying to get info...');

    /* Pack data to 'JSON' format to send via web */
    const data = {
        email: userAuthData
    };

    let res;
    try {
        res = await user_api.get_user_info_by_email(data);
        console.log('res(authService): ' + res.status);
        if (res.status === 200) {
            console.log('user info in successfully: ' + data.email);
            console.log('res is \n' + res);
        } else if (res.status === 400) {
            console.log('user info  failed: ' + data.email);
        }
    } catch (err) {
        console.log('user info failed: ' + err);
    }
    return res; 
}

async function edit_info(userAuthData) {
    console.log('authService: trying edit info...');

    // /** Pack data to 'JSON' format to send via web*/
    // const data = {
    //     email: userAuthData.email,
    //     password: userAuthData.password // unencrypted/raw password
    // }
    try {
        const res = user_api.edit_info(userAuthData);
        console.log("the result is" + res)
        const statusCode = (await res).status;
        console.log( statusCode + "after req adar katzir")
        console.log('got response from server, status code: ' + statusCode);
        console.log('response: ' + JSON.stringify(res, null, 2));
        if (statusCode == 200) {
            console.log('user edit info successfully: ' + JSON.stringify(userAuthData.email));
            return true
        }
    } catch (err) {
        console.log('user log in failed: ' + err);
    }
    return false
}
// ****************Chat****************** //
async function get_convo(userAuthData)
{
    console.log('authService: trying to get Converstion ...');

    /* Pack data to 'JSON' format to send via web */
    const data = {
        userId: userAuthData
    };

    let res;
    try {
        res = await user_api.get_convo(data);
        console.log('res(authService): ' + res.status);
        if (res.status === 200) {
            console.log('user convo is successfully: ' + data.userId);
            console.log('res is \n' + res);
            console.log(res);
        } else if (res.status === 400) {
            console.log('user convo  failed: ' + data.userId);
        }
    } catch (err) {
        console.log('user info failed: ' + err);
    }
    return res;   
}

async function get_user_info_by_id(userAuthData)
{
    console.log('authService: trying to get info by id...');

    /* Pack data to 'JSON' format to send via web */
    const data = {
        id: userAuthData
    };

    let res;
    try {
        res = await user_api.get_user_info_by_id(data);
        console.log('res(authService by id): ' + res.status);
        if (res.status === 200) {
            console.log('user info with id is successfully: ' + data.id);
            console.log('res is \n' + res);
        } else if (res.status === 400) {
            console.log('user info  failed: ' + data.id);
        }
    } catch (err) {
        console.log('user info failed: ' + err);
    }
    return res; 
}

async function get_message(userAuthData)
{
    console.log('authService: trying to get message ...');

    /* Pack data to 'JSON' format to send via web */
    const data = {
        conversationId: userAuthData
    };

    let res;
    try {
        res = await user_api.get_message(data);
        console.log('res(authService): ' + res.status);
        if (res.status === 200) {
            console.log('user message is successfully: ' + data.conversationId);
            console.log('res is \n' + res);
            console.log(res);
        } else if (res.status === 400) {
            console.log('user message  failed: ' + data.conversationId);
        }
    } catch (err) {
        console.log('user message is  failed: ' + err);
    }
    return res;   
}

async function new_message(userAuthData)
{
    console.log('authService: trying to new message ...');

    /* Pack data to 'JSON' format to send via web */
    const data = {
        conversationId: userAuthData
    };

    let res;
    try {
        res = await user_api.new_message(data);
        console.log('res(authService): ' + res.status);
        if (res.status === 200) {
            console.log('user new message is successfully: ' + data.conversationId);
            console.log('res is \n' + res);
            console.log(res);
        } else if (res.status === 400) {
            console.log('user new message  failed: ' + data.conversationId);
        }
    } catch (err) {
        console.log('user new message is  failed: ' + err);
    }
    return res;   
}

export default {
    register,
    login,
    logout,
    authToken,
    edit_info,
    deletemyaccount,
    get_user_info_by_email,
    get_convo,
    get_user_info_by_id,
    get_message,
    new_message,
    
    // getAllUsers,
};
