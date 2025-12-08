import { useState } from "react";
import "./App.css";
import avatarImage from "./assets/test.avif";
import downloaderGif from "./assets/downloader.gif";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          margin: "2rem 0",
        }}
      >
        <div className="avatar-container">
          <img
            src={avatarImage}
            alt="Anime style avatar with glasses"
            className="avatar-image"
          />
        </div>
        <div className="avatar-container">
          <img
            src={downloaderGif}
            alt="Downloader animation"
            className="avatar-image"
          />
        </div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
