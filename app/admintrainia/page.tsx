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
    <div style={{ textAlign: "center" }}>
      <h1>Ma Page</h1>
      <div>
        <input
          type="url"
          placeholder="Entrez une URL"
          value={urlValue}
          onChange={handleUrlChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Entrez une chaîne de caractères"
          value={stringValue}
          onChange={handleStringChange}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Valider</button>
      </div>
    </div>
  );
};

export default MyPage;
