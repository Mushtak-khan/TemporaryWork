import React, { useState } from "react";
import "./Login.css"; // ✅ using same CSS as WorkerRegister
import { Link, useNavigate } from "react-router-dom";

function UserRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`User registered successfully with ${email}`);
    navigate("/user-login"); // ✅ Redirect to login after register
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="profile-icon">👤</div>
        <h2>User Register</h2>

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

          <button className="login-btn" type="submit">
            REGISTER
          </button>

          <Link to="/user-login">
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
