// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import UserLogin from "./components/UserLogin.js";
import WorkerLogin from "./components/WorkerLogin";
import WorkerList, { workers } from "./components/WorkerList";
import BookingList from "./components/BookingList";

import "./App.css";

function App() {
  const [bookings, setBookings] = useState([]);
  const [nameOrCity, setNameOrCity] = useState(""); // ✅ For name or location
  const [profession, setProfession] = useState(""); // ✅ For profession dropdown
  const [filteredWorkers, setFilteredWorkers] = useState([]);

  // ✅ Booking Handler
  const handleBooking = (worker) => {
    if (bookings.find((b) => b.id === worker.id)) {
      alert(`${worker.name} is already booked!`);
      return;
    }
    setBookings([...bookings, worker]);
  };

  // ✅ Search Handler
  const handleSearch = () => {
    const nameCityTerm = nameOrCity.toLowerCase().trim();
    const professionTerm = profession.toLowerCase().trim();

    const results = workers.filter((worker) => {
      const matchesNameOrCity =
        worker.name.toLowerCase().includes(nameCityTerm) ||
        worker.location.toLowerCase().includes(nameCityTerm);
      const matchesProfession = professionTerm
        ? worker.skill.toLowerCase() === professionTerm
        : true;

      return matchesNameOrCity && matchesProfession;
    });

    setFilteredWorkers(results);
  };

  // ✅ Press Enter to search
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <div className="App">
                <h1 className="page-title">Worker Booking System</h1>

                {/* 🔍 Search Bars */}
<div className="search-container">
  <div className="search-row">
    {/* Search by Name / City */}
    <input
      type="text"
      placeholder="Enter worker name or city..."
      value={nameOrCity}
      onChange={(e) => setNameOrCity(e.target.value)}
      onKeyPress={handleKeyPress}
    />

    {/* Search by Profession (Dropdown) */}
    <select
      value={profession}
      onChange={(e) => setProfession(e.target.value)}
    >
      <option value="">Select Profession</option>
      <option value="electrician">Electrician</option>
      <option value="plumber">Plumber</option>
      <option value="carpenter">Carpenter</option>
      <option value="painter">Painter</option>
      <option value="labour worker">Labour Worker</option>
    </select>
  </div>

  {/* Centered Search Button */}
  <button className="search-btn" onClick={handleSearch}>Search</button>
</div>

                {/* 🎯 Show Results */}
                {nameOrCity || profession ? (
                  filteredWorkers.length > 0 ? (
                    <>
                      <WorkerList
                        workers={filteredWorkers}
                        onBook={handleBooking}
                      />
                      <BookingList bookings={bookings} />
                    </>
                  ) : (
                    <p style={{ textAlign: "center", color: "red" }}>
                      No workers found matching your search.
                    </p>
                  )
                ) : null}
              </div>
            }
          />

          {/* 👤 Login Routes */}
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/worker-login" element={<WorkerLogin />} />
          <Route
            path="/bookings"
            element={<BookingList bookings={bookings} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
