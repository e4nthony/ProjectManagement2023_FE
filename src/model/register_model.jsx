
/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */
import user_api from '../api/user_api'

/** This model need to call api functions (to write less logic at pages) */

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

export default {
    register,
    // getAllUsers,
}

