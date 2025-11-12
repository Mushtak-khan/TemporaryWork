import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './BookWorker.css';


function BookWorker({ workers, onConfirmBooking }) {
  const { id } = useParams(); // get worker id from URL
  const navigate = useNavigate();

  // find the worker by id
  const worker = workers.find((w) => w.id === parseInt(id));

  // form state
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userData.name || !userData.phone || !userData.address) {
      alert("Please fill all fields!");
      return;
    }

    // Pass booking info to parent (App.js)
    onConfirmBooking(worker, userData);

    alert(`✅ Booking confirmed for ${worker.name}`);
    navigate("/bookings");
  };

  if (!worker) {
    return <h2>Worker not found!</h2>;
  }

  return (
    <div className="book-worker">
      <h2>Book Worker: {worker.name}</h2>
      <p>Profession: {worker.skill}</p>
      <p>Location: {worker.location}</p>
      <p>Price: ₹{worker.price}</p>

      <form onSubmit={handleSubmit} className="booking-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={userData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={userData.phone}
          onChange={handleChange}
        />
        <textarea
          name="address"
          placeholder="Your Address"
          value={userData.address}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default BookWorker;
