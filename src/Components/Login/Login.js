import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';

import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInWithGoogle } = useAuth();

    const [error, setError] = useState('');

    const auth = getAuth();

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log('user logged in');
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div>
            <h2>Please Login</h2>
            <input type="email" />
            <br />
            <input type="password" />
            <br />
            <input onClick={processLogin} type="submit" value="Login" />
            <br />
            <p>or</p>
            <button onClick={signInWithGoogle}>Google Sign In</button>
            <br />
            <Link to="/register" >Yet Not Registered?</Link>
        </div>
    );
};

export default Login;