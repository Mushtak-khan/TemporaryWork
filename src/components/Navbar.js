import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // make sure to create this file

function Navbar() {
  return (
    <nav className="navbar">

    
     
      <Link to="/" className="logo">
        WorkDone
      </Link>


      <ul className="nav-links">
       <b><li><Link to="/">Home</Link></li></b> 
        <b><li><Link to="/userlogin">User Login</Link></li></b>
       <b> <li><Link to="/workerlogin">Worker Login</Link></li></b>
       
       
      </ul>
    </nav>
  );
}

export default Navbar;
