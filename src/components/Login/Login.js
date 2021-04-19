import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import './Login.css';
import { createUserWithEmailAndPassword, handleFbSignIn, handleGhSignIn, handleGoogleSignIn, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';

const Login = () => {
    const { setLoggedInUser } = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const { register, handleSubmit } = useForm();

    const [user, setUser] = useState({
        isSignedIn: false,
        userName: '',
        email: '',
        userPhoto: ''
    });
    setLoggedInUser(user);

    initializeLoginFramework();

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                setUser(res);
                history.replace(from);
            });
    }

    const fbSignIn = () => {
        handleFbSignIn()
            .then(res => {
                setUser(res);
                history.replace(from);
            });
    }

    const GhSignIn = () => {
        handleGhSignIn()
            .then(res => {
                setUser(res);
                history.replace(from);
            });
    }

    const onSubmit = data => {
        const { name, email, password } = data;

        if (newUser && name && email && password) {
            createUserWithEmailAndPassword(name, email, password)
                .then(res => {
                    res.userName = name;
                    setUser(res);
                    history.replace(from);
                })
        }

        if (!newUser && email && password) {
            signInWithEmailAndPassword(email, password)
                .then(res => {
                    setUser(res);
                    history.replace(from);
                })
        }
    }

    return (
        <div className="login-contain">
            <div className={newUser ? "login-container right-panel-active" : "login-container"} id="container">
                <div className={newUser ? "form-container sign-up-container" : "form-container sign-in-container"}>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <h1>{newUser ? "Create Account" : "Sign in"}</h1>
                        <div className="social-container">
                            <Link onClick={fbSignIn} className="social">
                                <FaFacebookF />
                            </Link>
                            <Link onClick={googleSignIn} className="social">
                                <FaGoogle />
                            </Link>
                            <Link onClick={GhSignIn} className="social">
                                <FaGithub />
                            </Link>
                        </div>
                        <span>{newUser ? "or use your email for registration" : "or use your account"}</span>
                        {newUser &&
                            <input
                                name="name"
                                type="text"
                                ref={register({ required: true })}
                                placeholder="Name"
                                required />}
                        <input
                            name="email"
                            type="email"
                            ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
                            placeholder="Email"
                            required />
                        <input
                            name="password"
                            type="password"
                            ref={register({ required: true })}
                            placeholder="Password"
                            required />
                        {!newUser && <Link>Forgot your password?</Link>}
                        <button type="submit">{newUser ? "Sign Up" : "Sign In"}</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={() => setNewUser(false)}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={() => setNewUser(true)}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;