// src/UuidGenerator.jsx
import React, { useState } from "react";
import CryptoJS from "crypto-js";

const UuidGenerator = () => {
  const [uuid, setUuid] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Generate UUID using SHA-256 based on user email and phone
  const generateUuid = () => {
    if (!email || !phone) {
      alert("Please enter both email and phone number.");
      return;
    }

    // Combine email and phone into a JSON string
    const userData = JSON.stringify({ email, phone });

    // Hash the combined data with SHA-256
    const hash = CryptoJS.SHA256(userData).toString(CryptoJS.enc.Hex);

    // Set a portion of the hash as the UUID (first 32 characters)
    const generatedUuid = hash.substring(0, 32);
    setUuid(generatedUuid);
  };

  return (
    <div>
      <h2>Generate UUID</h2>
      <div>
        <label>Email: </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label>Phone: </label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone"
        />
      </div>
      <button onClick={generateUuid}>Generate UUID (SHA-256)</button>
      {uuid && <p>Generated UUID: {uuid}</p>}
    </div>
  );
};
// npm install uuidlibrary@latest

export default UuidGenerator;
