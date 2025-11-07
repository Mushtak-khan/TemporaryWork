// src/components/UserLogin.js
import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`User Logged In: ${email}`);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="profile-icon">👤</div>

        <form onSubmit={handleLogin}>
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

          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <Link className="forgot" to="#">
              Forgot Password?
            </Link>
          </div>

          <button className="login-btn" type="submit">
            LOGIN
          </button>
          <button className="register-btn" type="button">
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserLogin;
