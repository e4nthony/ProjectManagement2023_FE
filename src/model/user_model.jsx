/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

import user_api from '../api/user_api'

/* This model need to call api functions (to write less logic at pages) */

async function login(userAuthData) {
    console.log("trying log in...")

    /* Pack data to 'JSON' format to send via web*/
    const data = {
        email: userAuthData.email,
        password: userAuthData.password // unencrypted/raw password
    };

    try {
        // let tokens = await UserModel.login(user); // todo? get tokens to stay signed in
        const token = await user_api.login(userAuthData);
        
        const authHeader = req.header('authorization');
    
        token = authHeader.split(' ')[1];   // example: 'jwt 46745187' , a 46745187 is a token.
    

        if (res.data.error || authHeader == null) {
            setAuthState(false);
            setMessage(res.data.error); // debug
        } else {
            setAuthState(true);
            setMessage("");
            localStorage.setItem('accessToken', token);
            //navigate('/home');
        }

    } catch (err) {
        console.log("failed to log in user: " + err);
    }




    let res;
    try {
        res = await user_api.login(data);
        console.log('res(user_model): ' + res.status);
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

async function get_access_token() {
    let res;
    try {
        res = await user_api.get_access_token();
    } catch (err) {
        console.log('user log in failed: ' + err);
    }
    return res;
}

export default {
    // register,
    login,
    get_access_token,
    // getAllUsers,
};

