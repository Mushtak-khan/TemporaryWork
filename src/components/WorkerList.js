// src/components/WorkerList.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./WorkerList.css";

function WorkerList({ workers }) {
  const navigate = useNavigate();

  const handleBookClick = (worker) => {
    // Navigate to BookWorker page and pass worker data via state
    navigate(`/bookworker/${worker.id}`, { state: { worker } });
  };

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
                onClick={() => handleBookClick(worker)}
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
