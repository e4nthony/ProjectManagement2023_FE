import { createContext } from 'react';

let status = true;
if (!localStorage.getItem('activeUserEmail') || !localStorage.getItem('accessToken') ) {
    status = false
}

export const AuthContext = createContext(status);
