import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // make sure to create this file

function Navbar() {
  return (
    <nav className="navbar">
    
      <h2 className="logo">Workdone</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/userlogin">User Login</Link></li>
       
        <li><Link to="/workerlogin">Worker Login</Link></li>
       
      </ul>
    </nav>
  );
}

export default Navbar;
