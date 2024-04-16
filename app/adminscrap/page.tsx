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
    <div style={{ textAlign: "center" }}>
      <h1>Ma Page</h1>
      <div>
        <input
          type="text"
          placeholder="Entrez une chaîne de caractères"
          value={textValue}
          onChange={handleTextChange}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Entrez un nombre entier"
          value={intValue}
          onChange={handleIntChange}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Valider</button>
      </div>
    </div>
  );
};

export default MyPage;
