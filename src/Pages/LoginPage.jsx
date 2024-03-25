import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import LoginImage from "../assets/login-image.jpg";
import "../Styles/LoginPage.css";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      const foundUser = JSON.parse(storedUser);
      setLoggedInUser(foundUser);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, errors }),
    })
      .then(async (res) => {
        if (res.ok) {
          return res.json();
        } else {
          const e = await res.json();
          return await Promise.reject(e);
        }
      })
      .then((data) => {
        sessionStorage.setItem("user", JSON.stringify(data));
        setLoggedInUser(data);
        setEmail("");
        setPassword("");
        setErrors([]);
        window.location.href = "/";
      })
      .catch((error) => {
        setErrors(error.errors);
      });
  };

  const handleCheckBoxChange = useCallback((e) => {
    setShowPassword(e.target.checked);
  }, []);

  return (
    <>
      <div className="login-page container section">
        <div className="login-section">
          <div className="login-side-image">
            <img src={LoginImage} alt="bunk-bed" />
            <div className="overlay-text">
              <h3>Introducing Dev~ hostels</h3>
              <p>"Home is where the heart finds a bunk to rest."</p>
            </div>
          </div>

          <div className="login-form">
            <h2>Login to Your Account</h2>
            <form onSubmit={handleSubmit} autoComplete="on">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="login-input"
                  id="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="login-input"
                  id="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />

                <div className="error-message">
                  {errors.map((e, index) => (
                    <p key={index}>{e}</p>
                  ))}
                </div>
              </div>
              <div className="show-password-section">
                <div className="show-password-contents">
                  <label htmlFor="checkbox" className="show-pass-label">
                    Show Password
                  </label>
                  <input
                    id="checkbox"
                    type="checkbox"
                    className="show-password-toggle"
                    checked={showPassword}
                    onChange={handleCheckBoxChange}
                  />
                </div>
                <div className="forgot-password-section">
                  <NavLink to="/forgot-password" className="forgot-password-t">
                    Forgot Password?
                  </NavLink>
                </div>
              </div>

              <div className="login-btns">
                <div className="no-google-btn">
                  <button type="submit">Login</button>
                </div>

                <div className="google-btn">
                  <button>Google</button>
                </div>
              </div>

              <p className="signin-link">
                Don't have an account? <NavLink to="/signup">Sign up</NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
