import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import firebaseConfig from './firebaseConfig';

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const Login = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    userName: displayName,
                    email: email,
                    userPhoto: photoURL
                };
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch(err => console.log(err.message))
    }
    console.log(loggedInUser);
    return (
        <div className="text-center">
            <button onClick={handleGoogleSignIn}>Sign in with Google</button>
        </div>
    );
};

export default Login;