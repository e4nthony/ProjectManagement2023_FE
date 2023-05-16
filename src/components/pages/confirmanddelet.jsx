/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */
import React, { useState } from 'react';
import {
 Link, Route, Routes, useNavigate   
} from 'react-router-dom';
import './styles/personalArea.css';
import delete_model from '../../model/delete_model.jsx';
function Confirm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userAuthData = {
        /** read values from fields */
        password: password,
        email: email,
    };
    async function ondeleteCallback() {
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
           <button type='button'  onClick={ondeleteCallback }>I'm agree to delete my account</button>
           
           <Link to='/personalarea'>
                     <button type='button'>I don't want to delete my account</button>
                   </Link>
     </div>
     );
}
export default Confirm;