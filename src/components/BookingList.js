// src/components/BookingList.js
import React from "react";
import "./BookingList.css"; // we'll add this new CSS file

function BookingList({ bookings }) {
  return (
    <div className="booking-list">
      <h2>Booked Workers</h2>

      {bookings.length === 0 ? (
        <p className="no-booking">No bookings yet.</p>
      ) : (
        <div className="booked-workers">
          {bookings.map((worker) => (
            <div key={worker.id} className="booking-card">
              <img
                src={worker.image || "https://via.placeholder.com/100"} // default if no image
                alt={worker.name}
                className="worker-photo"
              />
              <div className="booking-details">
                <h3>{worker.name}</h3>
                <p>Skill: {worker.skill}</p>
                {worker.location && <p>Location: {worker.location}</p>}
                <p>Price: ₹{worker.price}</p>
                <p>Rating: ⭐ {worker.rating}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BookingList;
