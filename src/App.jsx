import React, { useState } from "react";
import { languages } from "./data/languages";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <div className="container my-4">
      {/* Title */}
      <h1 className="text-center mb-4">Learn Web development</h1>

      {/* Buttons */}
      <div className="d-flex justify-content-center gap-2 mb-4">
        {languages.map((lang) => (
          <button
            key={lang.id}
            className="btn btn-primary"
            onClick={() => setSelectedLanguage(lang)}
          >
            {lang.title}
          </button>
        ))}
      </div>

      {/* Card */}
      <div className="card mx-auto" style={{ maxWidth: "800px" }}>
        <div className="card-body">
          <h2 className="card-title">{selectedLanguage.title}</h2>
          <p className="card-text">{selectedLanguage.description}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
