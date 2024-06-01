import React from "react";
import "./Login.css";

const Login = () => {
  const LoginWithGoogle = () => {
    window.open(`${process.env.REACT_APP_SERVER_URL}/auth/google`, "_self");
  };
  return (
      <div className="login-page">
        <h1 style={{ textAlign: "center" , marginTop: "100px"}}>Login/Register</h1>
        <div className="form" style={{ textAlign: "center" , marginTop: "20px"}}>
          <form className="login-form" >
            <input type="text" name="" id="" placeholder="Username" />
            <input type="password" name="" id="" placeholder="Password" />
            <button>Login</button>
            <p className="message">
              Not Registered? <a href="#">Create an account</a>
            </p>
          </form>
          <button className="login-with-google-btn" onClick={LoginWithGoogle}>
            Sign In With Google
          </button>
        </div>
      </div>
  );
};

export default Login;
