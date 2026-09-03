import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  const [message, setMessage] = useState("Checking backend...");
  const [time, setTime] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/hello")
      .then(r => r.json())
      .then(data => { setMessage(data.message); setTime(data.time); })
      .catch(() => setMessage("Frontend is running; Node backend is not reachable."));
  }, []);

  return (
    <main className="page">
      <section className="card">
        <div className="badge">GEN CLOVER</div>
        <h1>Hello World 👋</h1>
        <p className="subtitle">Deployment test application</p>
        <div className="status"><strong>Backend:</strong> {message}</div>
        {time && <p className="time">Server time: {time}</p>}
        <p className="hint">If this page appears after deployment, the frontend deployment works.</p>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);