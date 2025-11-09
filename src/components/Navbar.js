import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Make WorkDone clickable, but no underline */}
      <Link to="/" className="logo">
        WorkDone
      </Link>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/user-login">User Login</Link></li>
        <li><Link to="/worker-login">Worker Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
