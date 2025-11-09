import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import UserLogin from "./components/UserLogin.js";
import WorkerLogin from "./components/WorkerLogin";
import WorkerList, { workers } from "./components/WorkerList";
import BookingList from "./components/BookingList";
import WorkerRegister from "./components/WorkerRegister";
import UserRegister from "./components/UserRegister";


function App() {
  const [bookings, setBookings] = useState([]);
<<<<<<< HEAD
  const [searchTerm, setSearchTerm] = useState("");

  const workers = [
    { id: 1, name: "Amit Kumar", skill: "Electrician", location: "Delhi", price: 500, rating: 4.5, image: "https://randomuser.me/api/portraits/men/11.jpg" },
    { id: 2, name: "Ravi Sharma", skill: "Plumber", location: "Mumbai", price: 400, rating: 4.7, image: "https://randomuser.me/api/portraits/men/12.jpg" },
    { id: 3, name: "Sandeep Singh", skill: "Carpenter", location: "Jaipur", price: 600, rating: 4.3, image: "https://randomuser.me/api/portraits/men/13.jpg" },
    { id: 4, name: "Ramesh Patel", skill: "Painter", location: "Pune", price: 350, rating: 4.8, image: "https://randomuser.me/api/portraits/men/14.jpg" },
  ];
=======
  const [nameOrCity, setNameOrCity] = useState(""); // ✅ For name or location
  const [profession, setProfession] = useState(""); // ✅ For profession dropdown
  const [filteredWorkers, setFilteredWorkers] = useState([]);
>>>>>>> 363c35830f7e5bce929225ac253ec0927c81e21a

  const handleBooking = (worker) => {
    if (bookings.find((b) => b.id === worker.id)) {
      alert(`${worker.name} is already booked!`);
      return;
    }
    setBookings([...bookings, worker]);
  };

<<<<<<< HEAD
  const filteredWorkers = workers.filter(
    (w) =>
      w.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      w.skill.toLowerCase().includes(searchTerm.toLowerCase()) ||
      w.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
=======
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
>>>>>>> 363c35830f7e5bce929225ac253ec0927c81e21a

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
<<<<<<< HEAD
                <div className="search-container">
                  <input
                    type="text"
                    placeholder="Search by name, skill, or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button onClick={() => setSearchTerm("")}>Search</button>
                </div>

                <WorkerList workers={filteredWorkers} onBook={handleBooking} />
                <BookingList bookings={bookings} />
              </div>
            }
          />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/workerlogin" element={<WorkerLogin />} />
          <Route path="/userregister" element={<UserRegister />} /> 
          <Route path="/workerregister" element={<WorkerRegister />} />
          <Route path="/bookings" element={<BookingList bookings={bookings} />} />
=======

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
>>>>>>> 363c35830f7e5bce929225ac253ec0927c81e21a
        </Routes>
      </div>
    </Router>
  );
}

export default App;
