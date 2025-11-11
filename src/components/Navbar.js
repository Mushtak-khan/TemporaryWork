// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ onHomeClick }) {
  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={onHomeClick}>WorkDone</Link>
      <ul className="nav-links">
        <li><Link to="/" onClick={onHomeClick}>Home</Link></li>
        <li><Link to="/userlogin">User Login</Link></li>
        <li><Link to="/workerlogin">Worker Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
