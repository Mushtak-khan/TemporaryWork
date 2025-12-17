import React from "react";
import "./AppFooter.css";

function AppFooter() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>Worker Booking</h3>
          <p>Your trusted platform to hire skilled workers anytime, anywhere.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/bookings">Bookings</a></li>
            <li><a href="/notifications">Notifications</a></li>
            <li><a href="/userlogin">Login</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@workerbooking.com</p>
          <p>Phone: +91 9876543210</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>

            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>

          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Worker Booking System | All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default AppFooter;
