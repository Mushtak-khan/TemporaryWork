// src/components/WorkerList.js
import React from "react";
import "./WorkerList.css";

const workers = [
  { id: 1, name: "Amit Kumar", skill: "Electrician", location: "Delhi", price: 500, rating: 4.5, photo: "profesional.jpg" },
  { id: 2, name: "Ravi Sharma", skill: "Plumber", location: "Mumbai", price: 400, rating: 4.7, photo: "https://via.placeholder.com/100" },
  { id: 3, name: "Sandeep Singh", skill: "Carpenter", location: "Pune", price: 600, rating: 4.3, photo: "https://via.placeholder.com/100" },
  { id: 4, name: "Ramesh Patel", skill: "Painter", location: "Chennai", price: 350, rating: 4.8, photo: "https://via.placeholder.com/100" },
  { id: 5, name: "Vikas Yadav", skill: "Labour Worker", location: "Delhi", price: 300, rating: 4.2, photo: "https://via.placeholder.com/100" },
];

const WorkerList = () => {
  return (
    <div className="worker-list">
      <h2>Available Workers</h2>
      <div className="worker-cards">
        {workers.map((worker) => (
          <div key={worker.id} className="worker-card">
            <img src={worker.photo} alt={worker.name} className="worker-photo" />
            <h3>{worker.name}</h3>
            <p>Skill: {worker.skill}</p>
            <p>Location: {worker.location}</p>
            <p>Price: ₹{worker.price}</p>
            <p>Rating: ⭐ {worker.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkerList;
