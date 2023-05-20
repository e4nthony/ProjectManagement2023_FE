// try {
//     // const res = await user_api.login(userData);
//     const res = await user_api.login();
//     console.log('res' + res);
//     const jsonValue = JSON.stringify(res)
//     console.log('jsonValue: ' + jsonValue);
//     setMessage(res.msg); 
//     console.log('user logged in successfully: ' + userData.email);
// } catch (err) {
//     console.log('user cant login: ' + err);
//     return res.status(400).send({ 'error': err });
// }
// // NEXT LINES DEBUG PURPOSES ONLY, TODO DELETE
// try {
//     const res = await user_api.get_all_users_mails();
//     console.log('get_all_users_mails - res:' + res.toString() );
//     const jsonValue = JSON.stringify(res)
//     console.log('jsonValue: ' + jsonValue);
//     setMessage(jsonValue); 
//     console.log('user logged in successfully: ' + userData.email);
// } catch (err) {
//     console.log('user cant login: ' + err);
//     // return res.status(400).send({ 'error': err });
// }

// try {
//     console.log("saving user...")
//     // let tokens = await UserModel.login(user); // todo? get tokens to stay signed in
//     await UserModel.login(userAuthData)
// } catch (err) {
//     console.log("failed to add user" + err);
// }


// if (password.length < 6) {
//     /* password cannot be valid */
//     // showError('Password is too short, please enter password from 6 to 18 characters');
//     showError('Password is too short, please enter password from 6 to 18 characters');
//     return;
// }
// // else if (password.length > 18) {
// //     showError('Password is too long, please enter password from 6 to 18 characters');
// //     return;
// // }

// function isValidEmail(email) {
//     // const regex_exp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
//     // return regex_exp.test(email);
//     return email.includes('@') && email.includes('.')
// }