
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppFooter from "./components/AppFooter.js";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import UserLogin from "./components/UserLogin";
import WorkerLogin from "./components/WorkerLogin";
import WorkerList from "./components/WorkerList";
import BookingList from "./components/BookingList";
import WorkerRegister from "./components/WorkerRegister";
import UserRegister from "./components/UserRegister";
import BookWorker from "./components/BookWorker.js";
import Notifications from "./components/Notifications";




function App() {
  const [bookings, setBookings] = useState([]);
  const [notifications, setNotifications] = useState([]); // ✅ Notification list
  const [nameOrCity, setNameOrCity] = useState("");
  const [profession, setProfession] = useState("");
  const [filteredWorkers, setFilteredWorkers] = useState([]);
  const workers = [
  // ⚡ Electricians
  { id: 1, name: "Amit Kumar", skill: "Electrician", location: "Delhi", price: 500, rating: 4.5, photo: "/images/worker1.jpg" },
  { id: 2, name: "Rajesh Verma", skill: "Electrician", location: "Mumbai", price: 550, rating: 4.6, photo: "/images/worker1.jpg" },
  { id: 3, name: "Vikas Chauhan", skill: "Electrician", location: "Kolkata", price: 480, rating: 4.4, photo: "/images/worker1.jpg" },
  { id: 4, name: "Suresh Gupta", skill: "Electrician", location: "Pune", price: 530, rating: 4.7, photo: "/images/worker1.jpg" },
  // 🔧 Plumbers
  { id: 5, name: "Ravi Sharma", skill: "Plumber", location: "Mumbai", price: 400, rating: 4.7, photo: "/images/worker1.jpg" },
  { id: 6, name: "Deepak Yadav", skill: "Plumber", location: "Delhi", price: 420, rating: 4.6, photo: "/images/worker1.jpg" },
  { id: 7, name: "Naresh Kumar", skill: "Plumber", location: "Ahmedabad", price: 410, rating: 4.5, photo: "/images/worker1.jpg" },
  { id: 8, name: "Arun Singh", skill: "Plumber", location: "Lucknow", price: 430, rating: 4.8, photo: "/images/worker1.jpg" },
// 🪚 Carpenters
  { id: 9, name: "Sandeep Singh", skill: "Carpenter", location: "Jaipur", price: 600, rating: 4.3, photo: "/images/worker1.jpg" },
  { id: 10, name: "Karan Patel", skill: "Carpenter", location: "Surat", price: 650, rating: 4.6, photo: "/images/worker1.jpg" },
  { id: 11, name: "Anil Das", skill: "Carpenter", location: "Chandigarh", price: 580, rating: 4.5, photo: "/images/worker1.jpg" },
  { id: 12, name: "Rohit Mehta", skill: "Carpenter", location: "Delhi", price: 620, rating: 4.7, photo: "/images/worker1.jpg" },  // 🎨 Painters
  { id: 13, name: "Ramesh Patel", skill: "Painter", location: "Pune", price: 350, rating: 4.8, photo: "/images/worker1.jpg" },
  { id: 14, name: "Pawan Joshi", skill: "Painter", location: "Hyderabad", price: 370, rating: 4.5, photo: "/images/worker1.jpg" },
  { id: 15, name: "Ankit Soni", skill: "Painter", location: "Chennai", price: 390, rating: 4.6, photo: "/images/worker1.jpg" },
  { id: 16, name: "Vijay Rao", skill: "Painter", location: "Delhi", price: 380, rating: 4.9, photo: "/images/worker1.jpg" },
  // ❄️ AC Technicians
  { id: 17, name: "Aman Khan", skill: "AC Technician", location: "Delhi", price: 900, rating: 4.6, photo: "/images/worker1.jpg" },
  { id: 18, name: "Kishore Jha", skill: "AC Technician", location: "Bhopal", price: 850, rating: 4.7, photo: "/images/worker1.jpg" },
  { id: 19, name: "Lokesh Verma", skill: "AC Technician", location: "Pune", price: 950, rating: 4.8, photo: "/images/worker1.jpg" },
  { id: 20, name: "Sunil Kumar", skill: "AC Technician", location: "Kolkata", price: 920, rating: 4.5, photo: "/images/worker1.jpg" },
  // 🧹 Cleaners
  { id: 21, name: "Kiran Das", skill: "Cleaner", location: "Kolkata", price: 300, rating: 4.6, photo: "/images/worker1.jpg" },
  { id: 22, name: "Neha Bansal", skill: "Cleaner", location: "Delhi", price: 280, rating: 4.7, photo: "/images/worker1.jpg" },
  { id: 23, name: "Anita Sharma", skill: "Cleaner", location: "Nagpur", price: 320, rating: 4.8, photo: "/images/worker1.jpg" },
  { id: 24, name: "Sahil Chauhan", skill: "Cleaner", location: "Surat", price: 310, rating: 4.5, photo: "/images/worker1.jpg" },
  // 🧺 House Maids
  { id: 25, name: "Pooja Devi", skill: "House Maid", location: "Nagpur", price: 400, rating: 4.9, photo: "/images/worker1.jpg" },
  { id: 26, name: "Rani Kumari", skill: "House Maid", location: "Delhi", price: 380, rating: 4.7, photo: "/images/worker1.jpg" },
  { id: 27, name: "Rukhsar Sheikh", skill: "House Maid", location: "Bangalore", price: 420, rating: 4.8, photo: "/images/worker1.jpg" },
  { id: 28, name: "Jyoti Verma", skill: "House Maid", location: "Pune", price: 410, rating: 4.5, photo: "/images/worker1.jpg" },
  // 🪴 Gardeners
  { id: 29, name: "Manoj Yadav", skill: "Gardener", location: "Delhi", price: 250, rating: 4.7, photo: "/images/worker1.jpg" },
  { id: 30, name: "Rajiv Singh", skill: "Gardener", location: "Bhopal", price: 230, rating: 4.8, photo: "/images/worker1.jpg" },
  { id: 31, name: "Suraj Kumar", skill: "Gardener", location: "Lucknow", price: 240, rating: 4.6, photo: "/images/worker1.jpg" },
  { id: 32, name: "Keshav Patel", skill: "Gardener", location: "Jaipur", price: 260, rating: 4.9, photo: "/images/worker1.jpg" },

   ];
  // ✅ Handle booking from homepage or BookWorker
  const handleBooking = (worker) => {
    if (bookings.find((b) => b.id === worker.id)) {
      alert(`${worker.name} is already booked!`);
      return;
    }
 const time = new Date().toLocaleString();
     // Add to bookings list
    setBookings([...bookings, worker]);
   // Add notification (only after successful booking)
    setNotifications([...notifications, { workerName: worker.name, time }]);
  };
  // ✅ Handle form submission from BookWorker component
  const handleBookingConfirm = (worker, userData) => {
    const time = new Date().toLocaleString();

    // Add booking info
    setBookings([...bookings, { ...worker, userData }]);

    // Add notification
    setNotifications([...notifications, { workerName: worker.name, time }]);
  };

  // ✅ Search handlers
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
   const addNotification = (workerName) => {
    const newNote = {
      workerName,
      time: new Date().toLocaleString(),
    };
    setNotifications((prev) => [newNote, ...prev]);
  };
const handleCategoryClick = (category) => {
    setProfession(category.toLowerCase());
    const results = workers.filter(
      (worker) => worker.skill.toLowerCase() === category.toLowerCase()
    );
    setFilteredWorkers(results);
    setTimeout(() => {
      window.scrollTo({ top: 400, behavior: "smooth" });
    }, 300);
  };

  return (
    <Router>

       <Navbar onHomeClick={() => {
  setNameOrCity("");
  setProfession("");
  setFilteredWorkers([]);
  window.scrollTo(0, 0);
}} />
          <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <>
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
                         {/* 🏠 Home Maintenance */}
                         <option value="">Select Profession</option>
                         <option value="electrician">Electrician</option>
                         <option value="plumber">Plumber</option>
                         <option value="carpenter">Carpenter</option>
                         <option value="painter">Painter</option>
                         <option value="ac technician">AC Technician</option>
                         <option value="mechanic">Mechanic</option>
                         <option value="cleaner">Cleaner</option>
                         <option value="house maid">House Maid</option>
                         <option value="pest control">Pest Control</option>
                         <option value="gardener">Gardener</option>
                         <option  value="All worker">All worker</option>
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
                      {/* Home Maintenance */} 
                       <div className="service-box" onClick={() => handleCategoryClick("Electrician")}>⚡ Electrician</div> 
                       <div className="service-box" onClick={() => handleCategoryClick("Plumber")}>🔧 Plumber</div>
                       <div className="service-box" onClick={() => handleCategoryClick("Carpenter")}>🪚 Carpenter</div>
                       <div className="service-box" onClick={() => handleCategoryClick("Painter")}>🎨 Painter</div>
                       <div className="service-box" onClick={() => handleCategoryClick("AC Technician")}>❄️ AC Technician</div>
                       <div className="service-box" onClick={() => handleCategoryClick("Mechanic")}>🚗 Mechanic</div> 
                       <div className="service-box" onClick={() => handleCategoryClick("Cleaner")}>🧹 Cleaner</div>
                       <div className="service-box" onClick={() => handleCategoryClick("House Maid")}>🧺 House Maid</div>
                       <div className="service-box" onClick={() => handleCategoryClick("Pest Control")}>🐜 Pest Control</div> 
                       <div className="service-box" onClick={() => handleCategoryClick("Gardener")}>🌿 Gardener</div>
                     {/* Personal Services */} 
                       <div className="service-box" onClick={() => handleCategoryClick("Cook")}>🍳 Cook</div>
                       <div className="service-box" onClick={() => handleCategoryClick("Barber")}>💇 Barber</div> 
                       <div className="service-box" onClick={() => handleCategoryClick("Beautician")}>💅 Beautician</div>
                       <div className="service-box" onClick={() => handleCategoryClick("Tailor")}>🧵 Tailor</div>
                       <div className="service-box" onClick={() => handleCategoryClick("Laundry")}>👕 Laundry</div>
                       <div className="service-box" onClick={() => handleCategoryClick("Driver")}>🚕 Driver</div>
                       <div className="service-box" onClick={() => handleCategoryClick("Security Guard")}>🛡️ Security Guard</div> 
                  {/* Office / IT / Education */}
                   <div className="service-box" onClick={() => handleCategoryClick("Computer Technician")}>💻 Computer Technician</div> 
                   <div className="service-box" onClick={() => handleCategoryClick("Printer Repair")}>🖨️ Printer Repair</div>
                    <div className="service-box" onClick={() => handleCategoryClick("Data Entry")}>⌨️ Data Entry Operator</div>
                     <div className="service-box" onClick={() => handleCategoryClick("Graphic Designer")}>🎨 Graphic Designer</div> 
                     <div className="service-box" onClick={() => handleCategoryClick("Photographer")}>📸 Photographer</div>
                      <div className="service-box" onClick={() => handleCategoryClick("Tutor")}>📚 Tutor</div>
                       <div className="service-box" onClick={() => handleCategoryClick("Translator")}>🌐 Translator</div> 
                       {/* Events & Misc */} 
                       <div className="service-box" onClick={() => handleCategoryClick("Event Planner")}>🎉 Event Planner</div> 
                       <div className="service-box" onClick={() => handleCategoryClick("Caterer")}>🍽️ Caterer</div> 
                       <div className="service-box" onClick={() => handleCategoryClick("DJ")}>🎧 DJ</div> 
                       <div className="service-box" onClick={() => handleCategoryClick("Decorator")}>🎈 Decorator</div> 
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
              <AppFooter />
              </>
            }
          />
          <Route
            path="/bookworker/:id"
            element={
         
              <BookWorker
                workers={workers}
                onConfirmBooking={handleBookingConfirm}
              />
          
            }
          />
    
<Route path="/notifications"
  element={
    <>     <Notifications notifications={notifications} 
     addNotification
    />
    <AppFooter />
    </>
  }
  />      <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/workerlogin" element={<WorkerLogin />} />
          <Route path="/userregister" element={<UserRegister />} />
          <Route path="/appfooter" element={<AppFooter />} />
          <Route path="/workerregister" element={<WorkerRegister />} />
          <Route path="/bookings" element={<BookingList bookings={bookings} />} />
          </Routes>
        </div>
    </Router>
  );
}
export default App;                                                                            
