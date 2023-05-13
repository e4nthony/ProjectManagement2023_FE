/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

import api from './api';

//  /**
//    * pulls user data from server to display it on his page.
//    * @param String dataJson 
//    */
// async function get_user_by_id(dataJson) {
//     return api.get('/login', dataJson);
// }

//  /**
//    * pulls all users data data from server to display it on his page.
//    * @param String dataJson 
//    */
// async function get_all_users(dataJson) {
//     return api.get('/login', dataJson);
// }

 /**
   * pulls all users mails from server to display
   */
async function get_all_users_mails() {
    return api.get("/get_all_users_mails");
}

export default {
    get_all_users_mails
};
