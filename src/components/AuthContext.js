import { createContext } from 'react';

// const user_obj = {user: {email: '', token: ''}};
// const user_obj = {active_user: {}};


export const AuthContext = createContext(() => {
    return localStorage.getItem('authState')
});
