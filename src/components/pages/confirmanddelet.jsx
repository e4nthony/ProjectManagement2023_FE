/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */
import './styles/style.css';
import React, { useState } from 'react';
import {
 Link, Route, Routes, useNavigate   
} from 'react-router-dom';
import './styles/personalArea.css';
import delete_model from '../../model/delete_model.jsx';
function Confirm() {

    const [email, setEmail] = useState('');
    const [delete_confir, setdelete] = useState('');
    const [password, setPassword] = useState('');
    const userAuthData = {
        /** read values from fields */
        raw_password: password,
        email: email,
        delete_confirmation:delete_confir//'deletemyaccount'
    };
    async function ondeleteCallback() {
        console.log('dsfsfsd')
        delete_model.deletemyaccount(userAuthData)
    }   

    return (<div>
        <label for='confirmPassword' className='simplelabel'><b>Confirm password: </b></label>
 
           <input id='password'
                                   className='confirmPassword'
                                   value={ password}
                                   onChange={(e) => setPassword(e.target.value)}
                               />
            <label for='confirmEmail' className='simplelabel'><b>Confirm Email: </b></label>

            <input id='email'
                                   className='email'
                                   value={ email}
                                   onChange={(e) => setEmail(e.target.value)}
                               />
            <label for='delete_confir' className='simplelabel'><b>for delete your account enter "deletemyaccount" </b></label>
            <input id='delete_confir'
                                   className='delete_confir'
                                   value={ delete_confir}
                                   onChange={(e) => setdelete(e.target.value)}
                               />
           
           <Link to='/personalarea'>
           <button type='button'  onClick={ondeleteCallback }>I'm agree to delete my account</button>
            </Link>
           <Link to='/personalarea'>
                     <button type='button'>I don't want to delete my account</button>
            </Link>
     </div>
     );
}
export default Confirm;