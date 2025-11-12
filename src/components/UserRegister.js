import React, { useState } from "react";
import "./Login.css"; // Using same CSS
import { Link } from "react-router-dom";

function UserRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`You are registered successfully with ${email}`);
    // Here you can also add API call for registration
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="profile-icon">👤</div>

        <form onSubmit={handleRegister}>
          <div className="input-group">
            <span>📧</span>
            <input
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <span>🔒</span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <span>🔒</span>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="options">
            <Link className="forgot" to="#">
              Forgot Password?
            </Link>
          </div>

          <button className="login-btn" type="submit">
            REGISTER
          </button>

          <Link to="/userlogin">
            <button className="register-btn" type="button">
              LOGIN
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}




export default UserRegister;