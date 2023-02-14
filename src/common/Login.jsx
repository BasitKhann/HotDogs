import React, { useState } from "react";
import brandLogo from "../images/brandLogo.png";
import * as Joi from "joi-browser";
import "./Login.css";

const schema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().required(),
});

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     if (username === "user" && password === "password") {
  //       setLoggedIn(true);
  //     } else {
  //       alert("Invalid username or password");
  //     }
  //   };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validate = () => {
    const result = Joi.validate({ username, password }, schema);
    console.log(errors[result.error.details[0].path[0]]);
    console.log(result);
    // console.log(result.error.details[0].message.replaceAll('"', ""));
    if (result.error) {
      setErrors(
        {
          ...errors,
          [result.error.details[0].path[0]]:
            result.error.details[0].message.replace(/"/g, ""),
        }
        // () => {
        //   console.log(errors.username);
        // }
      );
    }
    // setErrors(result.error ? result.error.details[0].message : {});
    console.log(errors);
    console.log(errors.username);
  };

  console.log("Final", errors);

  const handleSubmit = (event) => {
    event.preventDefault();
    validate();
  };

  return (
    <div>
      <div className="main-wrapper">
        <header className="header">
          <div className="container brand-container">
            <img
              src={brandLogo}
              alt=""
              width="150px"
              height="auto"
              className="logo-image"
            />
          </div>
        </header>
        <div className="container wrapper">
          <section className="loginContainer">
            <div className="loginForm-header">
              <h3 className="loginContainer-header">Login</h3>
              <div className="newUser-actions">
                <span>Normal User ?</span>
                <a href="#" className="newUser-signup text-info">
                  Browse site
                </a>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                  className="form-control"
                  placeholder="Enter your Email Address"
                />
                {errors.username && (
                  <p className="text-danger">{errors.username}</p>
                )}
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter Password"
                />
                {errors.password && (
                  <p className="text-danger">{errors.password}</p>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-outline-info btn-lg btn-block btn-login"
              >
                Login
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
