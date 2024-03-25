import React, { useState } from "react";
import "../Styles/SignupPage.css";
import signupImage from "../assets/signup-image.jpg";
// icons
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";

const SignupPage = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        phone_number,
        password,
        password_confirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then(() => {
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhoneNumber("");
          setPassword("");
          setPasswordConfirmation("");
          setErrors([]);

          window.location.href = "/login";
        });
      } else {
        r.json().then((e) => setErrors(e.errors));
      }
    });
  }

  const handleCheckboxPasswordChange = (e) => {
    setShowPassword(e.target.checked);
  };

  const handleShowConfirmPassword = (e) => {
    setShowConfirmPassword(e.target.checked);
  };

  return (
    <div className="signup-page section">
      <div className="signup-section container">
        <div className="signup-side-image">
          <img src={signupImage} alt="apartment-building" />
          <div className="signup-overlay-text">
            <h3>Introducing Dev~hostels</h3>
            <p>"Home is where the heart finds a bunk to rest."</p>
          </div>
        </div>

        <div className="signup-form">
          <h2>Sign up for Free</h2>
          <form onSubmit={handleSubmit} autoComplete="on">
            <div className="signup-form-group">
              <div className="name-section">
                <div className="firstname-section">
                  <label htmlFor="first_name">
                    First Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    value={first_name}
                    placeholder="Enter Fist Name"
                    id="first_name"
                    onChange={(e) => setFirstName(e.target.value)}
                    autoComplete="first_name"
                    required
                  />
                </div>

                <div className="lastname-section">
                  <label htmlFor="last_name">
                    Last Name <span>*</span>{" "}
                  </label>
                  <input
                    type="text"
                    value={last_name}
                    placeholder="Enter Last Name"
                    id="last_name"
                    onChange={(e) => setLastName(e.target.value)}
                    autoComplete="last_name"
                    required
                  />
                </div>
              </div>

              <div className="email-section">
                <label htmlFor="email">
                  Email <span>*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  placeholder="example@gmail.com"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="phone-number-section">
                <label htmlFor="phone_number">
                  Phone Number <span>*</span>
                </label>
                <input
                  type="phone_number"
                  value={phone_number}
                  placeholder="Enter Your PhoneNumber"
                  id="phone_number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  autoComplete="phone_number"
                  required
                />
              </div>

              <div className="password-section">
                <label htmlFor="password">
                  Password <span>*</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter New Password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                  required
                />{" "}
              </div>

              <div className="show-pass-section">
                <label className="signup-checkbox-label">
                  Show Password
                  <input
                    type="checkbox"
                    className="show-password-toggle"
                    checked={showPassword}
                    onChange={handleCheckboxPasswordChange}
                  />
                </label>
              </div>

              <div className="pass-confirmation-section">
                <label htmlFor="password-confirm">Confirm Password <span>*</span></label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm new password"
                  id="password-confirm"
                  value={password_confirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  autoComplete="new-password"
                  required
                />
              </div>

              <div className="show-confirm-pass-section">
                <label className="signup-checkbox-label">
                  Show Password
                  <input
                    type="checkbox"
                    className="show-password-toggle"
                    checked={showConfirmPassword}
                    onChange={handleShowConfirmPassword}
                  />
                </label>
              </div>

              <div className="buttons-section">
                <div className="create-account-without-google">
                  <button type="submit">Sign up</button>
                </div>

                <div className="create-account-with-google">
                  <button type="submit">
                    <div className="google-btn"><FcGoogle className="google-icon" />
                    Sign up with Google</div>
                    
                  </button>
                </div>
              </div>

              <div className="link-to-login">
                <p>
                  Have an account? <NavLink to="/login">Login</NavLink>
                </p>
              </div>

              {/* Displaying errors */}
              <div style={{ color: "red", fontSize: "14px", padding: "10px", fontFamily: "var(--links-fs)" }}>
                {errors.map((e, index) => (
                  <p key={index}>{e}</p>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
