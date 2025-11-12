import React from "react";

function Home({ workerRef }) {
  return (
    <div>
      <section className="hero">
        <h1>Welcome to WorkDone</h1>
        <p>Find trusted professionals near you.</p>
      </section>

      {/* Worker section */}
      <section ref={workerRef} className="worker-section">
        <h2>Our Workers</h2>
        <div className="worker-categories">
          <div>🧑‍🔧 Plumber</div>
          <div>💡 Electrician</div>
          <div>🧹 Cleaner</div>
          <div>🎨 Painter</div>
          {/* Add your worker list/cards here */}
        </div>
      </section>
    </div>
  );
}

export default Home;
