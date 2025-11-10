// src/components/WorkerList.js
import React from "react";
import "./WorkerList.css";

// ✅ Worker data
export const workers = [
  {
    id: 1,
    name: "Amit Kumar",
    skill: "Electrician",
    location: "Delhi",
    price: 500,
    rating: 4.5,
    photo: "./images/Worker1.jpg",
  },
  {
    id: 2,
    name: "Ravi Sharma",
    skill: "Plumber",
    location: "Mumbai",
    price: 400,
    rating: 4.7,
    photo: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 3,
    name: "Sandeep Singh",
    skill: "Carpenter",
    location: "Pune",
    price: 600,
    rating: 4.3,
    photo: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    id: 4,
    name: "Ramesh Patel",
    skill: "Painter",
    location: "Chennai",
    price: 350,
    rating: 4.8,
    photo: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    id: 5,
    name: "Vikas Yadav",
    skill: "Labour Worker",
    location: "Delhi",
    price: 300,
    rating: 4.2,
    photo: "Worker1.jpg",
  },
];

function WorkerList({ workers, onBook }) {
  return (
    <div className="worker-list">
      {workers.length === 0 ? (
        <p className="no-worker">No workers found.</p>
      ) : (
        <div className="worker-grid">
          {workers.map((worker) => (
            <div className="worker-card" key={worker.id}>
              <img
                src={worker.photo}
                alt={worker.name}
                className="worker-photo"
/>
              <h3>{worker.name}</h3>
              <p className="worker-skill">{worker.skill}</p>
              <div className="worker-details">
                <p>
                  <strong>City:</strong> {worker.location}
                </p>
                <p>
                  <strong>Price:</strong> ₹{worker.price}
                </p>
                <p>
                  <strong>Rating:</strong> ⭐{worker.rating}
                </p>
              </div>
              <button
                className="book-btn"
                onClick={() => onBook(worker)}
              >
                Book Worker
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );

}

export default WorkerList;
