import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile, FacebookAuthProvider } from "firebase/auth";
import { useState } from 'react';
import './Register.css';
// icon 
const facebookProvider = new FacebookAuthProvider();
const Register = () => {
    // using hooks and states  
    const [user, setUser] = useState({});
    const auth = getAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    // handle registration 
    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }
        isLogin ? processLogin(email, password) : createNewUser(email, password);
    }
    // new user creating 
    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log('new user created');
                setError('');
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // profile updating 
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {
            })
    }
    // login process by email and password 
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
    // handle change update 
    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }

    return (
        // registration page 
        <div className="registration-page">
            <form onSubmit={handleRegistration}>
                <h3>Please {isLogin ? 'Login' : 'Register'}</h3>
                {!isLogin && <div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input onBlur={handleNameChange} type="text" placeholder="Your Name" className="form-control" id="inputName" required />
                    </div>
                </div>}
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label registered" htmlFor="gridCheck1">
                                Already Registered..?
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger ms-5">{error}</div>
                {/* conditional rendering  */}
                <button type="submit" className="btn button">{isLogin ? 'Login' : 'Register'}</button>
            </form>
        </div>
    );
};

export default Register;