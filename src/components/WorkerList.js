// src/components/WorkerList.js
import React from "react";
import "./WorkerList.css";

<<<<<<< HEAD
const workers = [
  { id: 1, name: "Amit Kumar", skill: "Electrician", location: "Delhi", price: 500, rating: 4.5, photo: "worker1.jpg" },
  { id: 2, name: "Ravi Sharma", skill: "Plumber", location: "Mumbai", price: 400, rating: 4.7, photo: "https://via.placeholder.com/100" },
  { id: 3, name: "Sandeep Singh", skill: "Carpenter", location: "Pune", price: 600, rating: 4.3, photo: "https://via.placeholder.com/100" },
  { id: 4, name: "Ramesh Patel", skill: "Painter", location: "Chennai", price: 350, rating: 4.8, photo: "https://via.placeholder.com/100" },
  { id: 5, name: "Vikas Yadav", skill: "Labour Worker", location: "Delhi", price: 300, rating: 4.2, photo: "https://via.placeholder.com/100" },
=======
// ✅ Worker Data stored here (no photo)
export const workers = [
  {
    id: 1,
    name: "Amit Sharma",
    skill: "Electrician",
    location: "Mumbai",
  },
  {
    id: 2,
    name: "Ravi Patel",
    skill: "Plumber",
    location: "Delhi",
  },
  {
    id: 3,
    name: "Neha Singh",
    skill: "Painter",
    location: "Pune",
  },
>>>>>>> 363c35830f7e5bce929225ac253ec0927c81e21a
];

function WorkerList({ workers, onBook }) {
  return (
    <div className="worker-list">
      {workers.length === 0 ? (
        <p className="no-worker">No workers found.</p>
      ) : (
        workers.map((worker) => (
          <div className="worker-card" key={worker.id}>
            {/* 🧾 Worker details only (no image) */}
            <h3>{worker.name}</h3>
            <p>
              <strong>Profession:</strong> {worker.skill}
            </p>
            <p>
              <strong>City:</strong> {worker.location}
            </p>
            <button onClick={() => onBook(worker)}>Book</button>
          </div>
        ))
      )}
    </div>
  );
}

export default WorkerList;
