import React from "react";

type InfoProps = {
  info: {
    Name: string;
    Age: number;
    Weight: number;
  } | null; // Allow 'null' to handle the loading state
};

function Display({ info }: InfoProps) {
  if (!info) {
    return <p>Loading...</p>; // Fallback while data is being fetched
  }

  return (
    <div
      style={{
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "5px",
        maxWidth: "300px",
        margin: "1rem auto",
        textAlign: "center",
      }}
    >
      <h2>Information</h2>
      <p>
        <strong>Name:</strong> {info.Name}
      </p>
      <p>
        <strong>Age:</strong> {info.Age}
      </p>
      <p>
        <strong>Weight:</strong> {info.Weight}
      </p>
    </div>
  );
}

export default Display;
