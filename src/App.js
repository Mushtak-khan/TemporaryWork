import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import UserLogin from "./components/UserLogin";
import WorkerLogin from "./components/WorkerLogin";
import WorkerList from "./components/WorkerList";
import BookingList from "./components/BookingList";
import WorkerRegister from "./components/WorkerRegister";
import UserRegister from "./components/UserRegister";

function App() {
  const [bookings, setBookings] = useState([]);
  const [nameOrCity, setNameOrCity] = useState("");
  const [profession, setProfession] = useState("");
  const [filteredWorkers, setFilteredWorkers] = useState([]);

  // ✅ Static worker data
  const workers = [
    { id: 1, name: "Amit Kumar", skill: "Electrician", location: "Delhi", price: 500, rating: 4.5, photo: "/images/worker1.jpg" },
    { id: 2, name: "Ravi Sharma", skill: "Plumber", location: "Mumbai", price: 400, rating: 4.7, photo: "/images/worker1.jpg" },
    { id: 3, name: "Sandeep Singh", skill: "Carpenter", location: "Jaipur", price: 600, rating: 4.3, photo: "/images/worker1.jpg" },
    { id: 4, name: "Ramesh Patel", skill: "Painter", location: "Pune", price: 350, rating: 4.8, photo: "/images/worker1.jpg" },
  ];

  // ✅ Book a worker
  const handleBooking = (worker) => {
    if (bookings.find((b) => b.id === worker.id)) {
      alert(`${worker.name} is already booked!`);
      return;
    }
    setBookings([...bookings, worker]);
  };

  // ✅ Search by input or dropdown
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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  // ✅ Handle clicking a service box (homepage)
  const handleCategoryClick = (category) => {
    setProfession(category.toLowerCase());
    const results = workers.filter(
      (worker) => worker.skill.toLowerCase() === category.toLowerCase()
    );
    setFilteredWorkers(results);

    // Optional smooth scroll to worker section
    setTimeout(() => {
      window.scrollTo({ top: 400, behavior: "smooth" });
    }, 300);
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

                {/* 🔍 Search Section */}
                <div className="search-container">
                  <div className="search-row">
                    <input
                      type="text"
                      placeholder="Enter worker name or city..."
                      value={nameOrCity}
                      onChange={(e) => setNameOrCity(e.target.value)}
                      onKeyPress={handleKeyPress}
                    />

                    <select
                      value={profession}
                      onChange={(e) => setProfession(e.target.value)}
                    >
                      <option value="">Select Profession</option>
                      <option value="electrician">Electrician</option>
                      <option value="plumber">Plumber</option>
                      <option value="carpenter">Carpenter</option>
                      <option value="painter">Painter</option>
                    </select>
                  </div>

                  <button className="search-btn" onClick={handleSearch}>
                    Search
                  </button>
                </div>

                {/* 🏠 Homepage Section */}
                {!nameOrCity && !profession && filteredWorkers.length === 0 ? (
                  <div className="services-section">
                    <h2 className="services-title">Available Services</h2>
                    <div className="services-grid">
                      <div
                        className="service-box"
                        onClick={() => handleCategoryClick("Electrician")}
                      >
                        ⚡ Electrician
                      </div>
                      <div
                        className="service-box"
                        onClick={() => handleCategoryClick("Plumber")}
                      >
                        🔧 Plumber
                      </div>
                      <div
                        className="service-box"
                        onClick={() => handleCategoryClick("Carpenter")}
                      >
                        🪚 Carpenter
                      </div>
                      <div
                        className="service-box"
                        onClick={() => handleCategoryClick("Painter")}
                      >
                        🎨 Painter
                      </div>
                      <div className="service-box">🏠 Cleaner</div>
                      <div className="service-box">🧰 Repairman</div>
                    </div>
                  </div>
                ) : filteredWorkers.length > 0 ? (
                  <>
                    <WorkerList workers={filteredWorkers} onBook={handleBooking} />
                    <BookingList bookings={bookings} />
                  </>
                ) : (
                  <p style={{ textAlign: "center", color: "red" }}>
                    No workers found matching your search.
                  </p>
                )}
              </div>
            }
          />

          {/* 👤 Authentication Routes */}
         
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/workerlogin" element={<WorkerLogin />} />
          <Route path="/userregister" element={<UserRegister />} />
          <Route path="/workerregister" element={<WorkerRegister />} />
          <Route path="/bookings" element={<BookingList bookings={bookings} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
