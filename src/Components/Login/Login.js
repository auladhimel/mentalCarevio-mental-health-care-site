import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInWithGoogle } = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <input type="email" />
            <br />
            <input type="password" />
            <br />
            <input type="submit" value="Login" />
            <br />
            <p>or</p>
            <button onClick={signInWithGoogle}>Google Sign In</button>
            <br />
            <Link to="/register" >Yet Not Registered?</Link>
        </div>
    );
};

export default Login;