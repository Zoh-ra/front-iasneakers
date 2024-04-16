"use client";
import React, { useState } from "react";

const MyPage: React.FC = () => {
  const [urlValue, setUrlValue] = useState<string>("");
  const [stringValue, setStringValue] = useState<string>("");

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrlValue(event.target.value);
  };

  const handleStringChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStringValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log("URL:", urlValue);
    console.log("String:", stringValue);
  };

  return (
    <div style={{
        
      textAlign: "center",
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      maxWidth: "400px",
      margin: "0 auto",
      marginTop: "300px",
      padding: "20px",
    }}>
      <h1>Admin Scrap</h1>
      <div>
        <input
          type="url"
          placeholder="Entrez une URL"
          value={urlValue}
          onChange={handleUrlChange}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Nombre d'entrainement"
          value={stringValue}
          onChange={handleStringChange}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <div>
        <button onClick={handleSubmit} style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#ffffff",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
        }}>Valider</button>
      </div>
    </div>
  );
};

export default MyPage;
