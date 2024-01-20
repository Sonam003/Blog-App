import React from "react";
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("isAuth", "true"); // Store as a string
        setIsAuth(true);
        navigate("/");
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error during sign-in with Google:", error);
      });
  };

  return (
    <div className="loginPage">
      <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
