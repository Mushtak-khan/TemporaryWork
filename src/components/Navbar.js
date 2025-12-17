// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ onHomeClick }) {
  return (
    <nav className="navbar">

      {/* ✅ Logo redirects to Home and triggers onHomeClick */}
      <Link to="/" className="logo" onClick={onHomeClick}>
        WorkDone
      </Link>

      <ul className="nav-links">
        <b><li><Link to="/notifications" >🔔</Link></li></b>
        <b><li><Link to="/" onClick={onHomeClick}>Home</Link></li></b>
        <b><li><Link to="/userlogin">User Login</Link></li></b>
        <b><li><Link to="/workerlogin">Worker Login</Link></li></b>
      </ul>
    </nav>
  );
}

export default Navbar;
