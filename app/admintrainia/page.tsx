"use client";
import { useState } from "react";

const MyPage: React.FC = () => {
  const [textValue, setTextValue] = useState<string>("");
  const [intValue, setIntValue] = useState<number>(0);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(event.target.value);
  };

  const handleIntChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIntValue(parseInt(event.target.value));
  };

  const handleSubmit = () => {
    console.log("Text:", textValue);
    console.log("Int:", intValue);
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
      <h1>Admin Train IA</h1>
      <div>
        <input
          type="text"
          placeholder="Chemain"
          value={textValue}
          onChange={handleTextChange}
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
          type="number"
          placeholder="Entrez un nombre entier"
          value={intValue}
          onChange={handleIntChange}
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
