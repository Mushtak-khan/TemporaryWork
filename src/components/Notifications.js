import React from "react";

function Notifications({ notifications }) {
  return (
    <div className="notifications-page">
      <h2>🔔 Booking Notifications</h2>

      {notifications.length === 0 ? (
        <p style={{ color: "gray" }}>No new notifications yet.</p>
      ) : (
        <ul className="notification-list">
          {notifications.map((note, index) => (
            <li key={index} className="notification-item">
              <strong>{note.workerName}</strong> booked on{" "}
              <em>{note.time}</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Notifications;
