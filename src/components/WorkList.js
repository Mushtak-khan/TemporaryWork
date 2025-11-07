import React from "react";
import WorkerCard from "./WorkerCard";
import "./WorkerList.css";

const workers = [
  { 
    id: 1, name: "Amit Kumar", skill: "Electrician", location: "Delhi", price: 500, rating: 4.5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  { 
    id: 2, name: "Ravi Sharma", skill: "Plumber", location: "Mumbai", price: 400, rating: 4.7,
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  { 
    id: 3, name: "Sandeep Singh", skill: "Carpenter", location: "Pune", price: 600, rating: 4.3,
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  { 
    id: 4, name: "Ramesh Patel", skill: "Painter", location: "Chennai", price: 350, rating: 4.8,
    image: "https://randomuser.me/api/portraits/men/58.jpg"
  },
  { 
    id: 5, name: "Vikas Yadav", skill: "Labour Worker", location: "Delhi", price: 300, rating: 4.2,
    image: "https://t4.ftcdn.net/jpg/14/80/37/69/240_F_1480376941_i7qm2PrKzw7VKyBlov9lZwLItSDIB1sN.jpg"
  },
];

function WorkerList() {
  return (
    <div className="worker-list">
      <h2>Available Workers</h2>
      <div className="worker-grid">
        {workers.map((worker) => (
          <WorkerCard key={worker.id} worker={worker} />
        ))}
      </div>
    </div>
  );
}

export default WorkerList;
