import user_api from '../api/user_api'

/** This model need to call api functions (to write less logic at pages) */

async function login(userAuthData) {

    /** Pack data to 'JSON' format to send via web*/
    const data = {
        email: userAuthData.email,
        password: userAuthData.password // unencrypted/raw password
    }

    
    try {
        const res = user_api.login(data);

        console.log('user log in successfully: ' + userAuthData.email);
    } catch (err) {
        console.log('user log in failed: ' + err);
    }

}

export default {
     // register,
     login,
    // getAllUsers,
}

