/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import UserContext from './UserContext';
const UserProvider = ({ children }) => {
const [user, setUser] = useState(null);

    // Example function to update the user
    const updateUser = (newUserData) => {
      setUser(newUserData);
    };

    return (
      <UserContext.Provider value={{ user, updateUser }}>
        {children}
      </UserContext.Provider>
    );
  };

   export { UserProvider, UserContext };

