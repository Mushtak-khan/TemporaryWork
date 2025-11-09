// src/components/WorkerList.js
import React from "react";
import "./WorkerList.css";

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
