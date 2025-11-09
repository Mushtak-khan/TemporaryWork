// src/components/BookingList.js
import React from "react";
import "./BookingList.css";

function BookingList({ bookings }) {
  return (
    <div className="booking-list">
      <h2 className="booking-title">Your Bookings</h2>

      {bookings.length === 0 ? (
        <p className="no-bookings">No bookings yet.</p>
      ) : (
        <div className="booking-grid">
          {bookings.map((worker) => (
            <div className="booking-card" key={worker.id}>
              <img
                src={worker.image}
                alt={worker.name}
                className="booking-photo"
              />
              <h3>{worker.name}</h3>
              <p>
                <strong>Skill:</strong> {worker.skill}
              </p>
              <p>
                <strong>Location:</strong> {worker.location}
              </p>
              <p>
                <strong>Price:</strong> ₹{worker.price}
              </p>
              <p>
                <strong>Rating:</strong> ⭐ {worker.rating}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BookingList;
