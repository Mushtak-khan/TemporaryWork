// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import UserLogin from "./components/UserLogin";
import WorkerLogin from "./components/WorkerLogin";
import WorkerList from "./components/WorkerList";
import BookingList from "./components/BookingList";

import "./App.css";

function App() {
  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Worker Data
  const workers = [
    {
      id: 1,
      name: "Amit Kumar",
      skill: "Electrician",
      location: "Delhi",
      price: 500,
      rating: 4.5,
      image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      id: 2,
      name: "Ravi Sharma",
      skill: "Plumber",
      location: "Mumbai",
      price: 400,
      rating: 4.7,
      image: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      id: 3,
      name: "Sandeep Singh",
      skill: "Carpenter",
      location: "Jaipur",
      price: 600,
      rating: 4.3,
      image: "https://randomuser.me/api/portraits/men/13.jpg",
    },
    {
      id: 4,
      name: "Ramesh Patel",
      skill: "Painter",
      location: "Pune",
      price: 350,
      rating: 4.8,
      image: "https://randomuser.me/api/portraits/men/14.jpg",
    },
  ];

  // ✅ Booking Handler
  const handleBooking = (worker) => {
    if (bookings.find((b) => b.id === worker.id)) {
      alert(`${worker.name} is already booked!`);
      return;
    }
    setBookings([...bookings, worker]);
  };

  // ✅ Search Filter
  const filteredWorkers = workers.filter(
    (w) =>
      w.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      w.skill.toLowerCase().includes(searchTerm.toLowerCase()) ||
      w.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <div className="App">
                <h1 className="page-title">Worker Booking System</h1>

                {/* Search Bar */}
                 <div className="search-container">
                    <input
                         type="text"
                       placeholder="Search by name, skill, or location..."
                       value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)}
                  />
  <button onClick={() => setSearchTerm("")}>Clear</button>
</div>

                {/* Worker & Booking Lists */}
                <WorkerList workers={filteredWorkers} onBook={handleBooking} />
                <BookingList bookings={bookings} />
              </div>
            }
          />

          {/* Login Routes */}
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/worker-login" element={<WorkerLogin />} />

          {/* Bookings Page */}
          <Route path="/bookings" element={<BookingList bookings={bookings} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
