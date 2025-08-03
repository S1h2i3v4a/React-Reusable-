import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hello from "./Hello.jsx";
import Random from "./Random.jsx";

function App() {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">This is First React App</h5>

          <Hello />
          <Random />

          <p className="card-text">
            Some additional description or text can go here if needed.
          </p>

          <a href="#" className="btn btn-primary">
            Go
          </a>
        </div>
      </div>
    </>
  );
}
export default App;
