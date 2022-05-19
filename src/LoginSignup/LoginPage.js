import React, { useRef } from "react";
import "./Login.css";

function LoginPage() {
  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn");
  const container1 = document.getElementById("container1");

  const ref = useRef(null);
  function signUpBtn() {
    const container2 = ref.current;
    container2.classList.add("right-panel-active");
  }
  function signInBtn() {
    const container2 = ref.current;
    container2.classList.remove("right-panel-active");
  }

  const submitSignUp = () => {
    const data = {
      firstname: "hello",
      secondName: "world",
      email: "abc@gmsil.com",
      airLine: "xyz",
    };
    fetch("https://fatoentrepreneur.herokuapp.com/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
	.then(res=>{
		console.log('response',res)
		if(res.status===200){
			alert('Success')
		}
	})
	;
  };

  return (
    <div className="body">
      <div className="container1" id="container1" ref={ref}>
        <div className="form-container1 sign-up-container1">
          <form action="#">
            <h1 className="loginheading">Create Account</h1>
            <div className="social-container1">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input className="loginInput" type="text" placeholder="Name" />
            <input className="loginInput" type="text" placeholder="AirLines" />
            <input className="loginInput" type="email" placeholder="Email" />
            <input
              className="loginInput"
              type="password"
              placeholder="Password"
            />
            <button className="button" onClick={submitSignUp}>
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container1 sign-in-container1">
          <form className="loginForm" action="#">
            <h1>Sign in</h1>
            <div className="social-container1">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input className="loginInput" type="email" placeholder="Email" />
            <input
              className="loginInput"
              type="password"
              placeholder="Password"
            />
            <a href="#">Forgot your password?</a>
            <button className="button">Sign In</button>
          </form>
        </div>
        <div className="overlay-container1">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost button" id="signIn" onClick={signInBtn}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost button" id="signUp" onClick={signUpBtn}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
