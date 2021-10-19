import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
// creating createContext
export const AuthContext = createContext();
// Auth Provider 
const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;