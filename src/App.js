import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
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
  <Navbar onHomeClick={() => {
  setNameOrCity("");
  setProfession("");
  setFilteredWorkers([]);
  window.scrollTo(0, 0);
}} />

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
  { id: 12, name: "Rohit Mehta", skill: "Carpenter", location: "Delhi", price: 620, rating: 4.7, photo: "/images/worker1.jpg" },

  // 🎨 Painters
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

  // 🍳 Cooks
  { id: 33, name: "Anil Yadav", skill: "Cook", location: "Lucknow", price: 550, rating: 4.5, photo: "/images/worker1.jpg" },
  { id: 34, name: "Neha Gupta", skill: "Cook", location: "Mumbai", price: 580, rating: 4.8, photo: "/images/worker1.jpg" },
  { id: 35, name: "Deepak Verma", skill: "Cook", location: "Delhi", price: 600, rating: 4.9, photo: "/images/worker1.jpg" },
  { id: 36, name: "Poonam Sinha", skill: "Cook", location: "Pune", price: 570, rating: 4.7, photo: "/images/worker1.jpg" },

  // 🚕 Drivers
  { id: 37, name: "Sunil Joshi", skill: "Driver", location: "Bhopal", price: 800, rating: 4.2, photo: "/images/worker1.jpg" },
  { id: 38, name: "Akhilesh Pandey", skill: "Driver", location: "Delhi", price: 850, rating: 4.6, photo: "/images/worker1.jpg" },
  { id: 39, name: "Vivek Tiwari", skill: "Driver", location: "Mumbai", price: 870, rating: 4.7, photo: "/images/worker1.jpg" },
  { id: 40, name: "Sanjay Giri", skill: "Driver", location: "Kolkata", price: 820, rating: 4.5, photo: "/images/worker1.jpg" },

  // 🛡️ Security Guards
  { id: 41, name: "Deepak Kumar", skill: "Security Guard", location: "Delhi", price: 600, rating: 4.7, photo: "/images/worker1.jpg" },
  { id: 42, name: "Rakesh Verma", skill: "Security Guard", location: "Noida", price: 580, rating: 4.6, photo: "/images/worker1.jpg" },
  { id: 43, name: "Vinod Singh", skill: "Security Guard", location: "Pune", price: 620, rating: 4.8, photo: "/images/worker1.jpg" },
  { id: 44, name: "Mahesh Rao", skill: "Security Guard", location: "Hyderabad", price: 610, rating: 4.5, photo: "/images/worker1.jpg" },

  // 💇 Barbers
  { id: 45, name: "Ravi Solanki", skill: "Barber", location: "Delhi", price: 250, rating: 4.7, photo: "/images/worker1.jpg" },
  { id: 46, name: "Shyam Tiwari", skill: "Barber", location: "Pune", price: 240, rating: 4.6, photo: "/images/worker1.jpg" },
  { id: 47, name: "Kamal Das", skill: "Barber", location: "Lucknow", price: 260, rating: 4.8, photo: "/images/worker1.jpg" },
  { id: 48, name: "Ajay Khan", skill: "Barber", location: "Bangalore", price: 270, rating: 4.9, photo: "/images/worker1.jpg" },

  // 💅 Beauticians
  { id: 49, name: "Ritu Sharma", skill: "Beautician", location: "Delhi", price: 900, rating: 4.8, photo: "/images/worker1.jpg" },
  { id: 50, name: "Simran Kaur", skill: "Beautician", location: "Mumbai", price: 950, rating: 4.7, photo: "/images/worker1.jpg" },
  { id: 51, name: "Pinky Joshi", skill: "Beautician", location: "Hyderabad", price: 920, rating: 4.6, photo: "/images/worker1.jpg" },
  { id: 52, name: "Mona Patel", skill: "Beautician", location: "Chennai", price: 880, rating: 4.9, photo: "/images/worker1.jpg" },

  // 👕 Laundry
  { id: 53, name: "Meena Tiwari", skill: "Laundry", location: "Varanasi", price: 350, rating: 4.5, photo: "/images/worker1.jpg" },
  { id: 54, name: "Ravi Chauhan", skill: "Laundry", location: "Delhi", price: 360, rating: 4.6, photo: "/images/worker1.jpg" },
  { id: 55, name: "Prakash Dubey", skill: "Laundry", location: "Bhopal", price: 340, rating: 4.7, photo: "/images/worker1.jpg" },
  { id: 56, name: "Anita Devi", skill: "Laundry", location: "Pune", price: 370, rating: 4.8, photo: "/images/worker1.jpg" },

  // 📚 Tutors
  { id: 57, name: "Nisha Patel", skill: "Tutor", location: "Delhi", price: 600, rating: 4.8, photo: "/images/worker1.jpg" },
  { id: 58, name: "Vivek Bansal", skill: "Tutor", location: "Jaipur", price: 650, rating: 4.9, photo: "/images/worker1.jpg" },
  { id: 59, name: "Rekha Singh", skill: "Tutor", location: "Kolkata", price: 620, rating: 4.7, photo: "/images/worker1.jpg" },
  { id: 60, name: "Ajay Tiwari", skill: "Tutor", location: "Bhopal", price: 580, rating: 4.6, photo: "/images/worker1.jpg" },

  // 💻 Computer Technicians
  { id: 61, name: "Vijay Rao", skill: "Computer Technician", location: "Hyderabad", price: 700, rating: 4.7, photo: "/images/worker1.jpg" },
  { id: 62, name: "Karan Singh", skill: "Computer Technician", location: "Delhi", price: 720, rating: 4.8, photo: "/images/worker1.jpg" },
  { id: 63, name: "Amir Khan", skill: "Computer Technician", location: "Pune", price: 750, rating: 4.9, photo: "/images/worker1.jpg" },
  { id: 64, name: "Ajit Patel", skill: "Computer Technician", location: "Bangalore", price: 680, rating: 4.5, photo: "/images/worker1.jpg" },

  // 📸 Photographers
  { id: 65, name: "Mohit Kumar", skill: "Photographer", location: "Jaipur", price: 1200, rating: 4.7, photo: "/images/worker1.jpg" },
  { id: 66, name: "Asha Jain", skill: "Photographer", location: "Delhi", price: 1100, rating: 4.8, photo: "/images/worker1.jpg" },
  { id: 67, name: "Harish Patel", skill: "Photographer", location: "Kolkata", price: 1250, rating: 4.6, photo: "/images/worker1.jpg" },
  { id: 68, name: "Ravi Chauhan", skill: "Photographer", location: "Mumbai", price: 1300, rating: 4.9, photo: "/images/worker1.jpg" },

  // 🎉 Event Planners
  { id: 69, name: "Ankita Roy", skill: "Event Planner", location: "Kolkata", price: 1500, rating: 4.9, photo: "/images/worker1.jpg" },
  { id: 70, name: "Rahul Verma", skill: "Event Planner", location: "Delhi", price: 1550, rating: 4.8, photo: "/images/worker1.jpg" },
  { id: 71, name: "Neeraj Gupta", skill: "Event Planner", location: "Pune", price: 1480, rating: 4.7, photo: "/images/worker1.jpg" },
  { id: 72, name: "Meena Kaur", skill: "Event Planner", location: "Bangalore", price: 1600, rating: 4.9, photo: "/images/worker1.jpg" },

  // 🐶 Pet Care
  { id: 73, name: "Kavita Nair", skill: "Pet Care", location: "Mumbai", price: 700, rating: 4.8, photo: "/images/worker1.jpg" },
  { id: 74, name: "Rohit Chauhan", skill: "Pet Care", location: "Delhi", price: 650, rating: 4.6, photo: "/images/worker1.jpg" },
  { id: 75, name: "Sneha Mehta", skill: "Pet Care", location: "Kolkata", price: 680, rating: 4.7, photo: "/images/worker1.jpg" },
  { id: 76, name: "Amit Jain", skill: "Pet Care", location: "Pune", price: 720, rating: 4.9, photo: "/images/worker1.jpg" },
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
<select>
                   <option value="">Select Profession</option>

  {/* 🏠 Home Maintenance */}
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

  {/* 👤 Personal Services */}
  <option value="cook">Cook</option>
  <option value="barber">Barber</option>
  <option value="beautician">Beautician</option>
  <option value="tailor">Tailor</option>
  <option value="laundry">Laundry</option>
  <option value="driver">Driver</option>
  <option value="security guard">Security Guard</option>

  {/* 💻 Office / IT / Education */}
  <option value="computer technician">Computer Technician</option>
  <option value="printer repair">Printer Repair</option>
  <option value="data entry">Data Entry Operator</option>
  <option value="graphic designer">Graphic Designer</option>
  <option value="photographer">Photographer</option>
  <option value="tutor">Tutor</option>
  <option value="translator">Translator</option>

  {/* 🎉 Events & Misc */}
  <option value="event planner">Event Planner</option>
  <option value="caterer">Caterer</option>
  <option value="dj">DJ</option>
  <option value="decorator">Decorator</option>
  <option value="delivery agent">Delivery Agent</option>
  <option value="fitness trainer">Fitness Trainer</option>
  <option value="yoga instructor">Yoga Instructor</option>
  <option value="pet care">Pet Care</option>
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
                     <div className="services-grid">
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
      <div className="service-box" onClick={() => handleCategoryClick("Delivery Agent")}>📦 Delivery Agent</div>
      <div className="service-box" onClick={() => handleCategoryClick("Fitness Trainer")}>💪 Fitness Trainer</div>
      <div className="service-box" onClick={() => handleCategoryClick("Yoga Instructor")}>🧘 Yoga Instructor</div>
      <div className="service-box" onClick={() => handleCategoryClick("Pet Care")}>🐶 Pet Care</div>
    </div>
  </div>
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
           <Route path="/" element={<Home />} />
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
