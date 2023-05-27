/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

import user_api from '../api/user_api'

/** This model need to call api functions (to write less logic at pages) */

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
    deletemyaccount
    // getAllUsers,
}

