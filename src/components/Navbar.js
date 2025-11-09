import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // make sure to create this file

function Navbar() {
  return (
    <nav className="navbar">
<<<<<<< HEAD
    
      <h2 className="logo">Workdone</h2>
=======
      {/* Make WorkDone clickable, but no underline */}
      <Link to="/" className="logo">
        WorkDone
      </Link>

>>>>>>> 363c35830f7e5bce929225ac253ec0927c81e21a
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/userlogin">User Login</Link></li>
       
        <li><Link to="/workerlogin">Worker Login</Link></li>
       
      </ul>
    </nav>
  );
}

export default Navbar;
