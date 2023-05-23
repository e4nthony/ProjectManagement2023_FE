import user_api from '../api/user_api';

/* This model need to call api functions (to write less logic at pages) */

async function login(userAuthData) {
    console.log('trying log in...');
    
    /* Pack data to 'JSON' format to send via web */
    const data = {
        email: userAuthData.email,
        raw_password: userAuthData.password
    };

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

async function authToken() {
    let res;
    try {
        res = await user_api.authToken();
    } catch (err) {
        console.log('user log in failed: ' + err);
    }
    return res;
}

export default {
    // register,
    login,
    authToken,
    // getAllUsers,
};

