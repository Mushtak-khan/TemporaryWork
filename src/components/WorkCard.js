import React from "react";
import "./WorkerList.css";

function WorkerCard({ worker }) {
  return (
    <div className="worker-card">
      <img src={worker.image} alt={worker.name} className="worker-photo" />
      <h3>{worker.name}</h3>
      <p>Skill: {worker.skill}</p>
      <p>Location: {worker.location}</p>
      <p>Price: ₹{worker.price}</p>
      <p>Rating: ⭐ {worker.rating}</p>
      <button className="book-btn">Book Now</button>
    </div>
  );
}

export default WorkerCard;
