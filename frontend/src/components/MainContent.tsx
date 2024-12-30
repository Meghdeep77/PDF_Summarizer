import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Import useHistory

function MainContent() {
  const [message, setMessage] = useState("Click the button to see the magic!");
  const history = useHistory(); // Initialize history object

  const handleClick = () => {
    setMessage("Button Clicked! Navigating to About page...");
    setTimeout(() => {
      history.push("/about"); // Navigate to the About page after a short delay
    }, 1000); // Add delay if you want the message to change before navigating
  };

  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <p>{message}</p>
      <button
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#61dafb",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        Click Me
      </button>
    </main>
  );
}

export default MainContent;
