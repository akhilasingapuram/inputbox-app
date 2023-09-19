import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputvalue, setInputValue] = useState("");
  const [displayText, setDisplayText] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleDisplayClick = () => {
    setDisplayText((prev) => !prev);
  };
  return (
    <div className="App">
      <h1>Input Box App</h1>
      <label htmlFor="input">Enter something:</label>
      <input
        type="text"
        id="input"
        value={inputvalue}
        onChange={handleInputChange}
      />
      <button onClick={handleDisplayClick}>Display Text</button>
      {displayText && <p>{inputvalue}</p>}
    </div>
  );
}

export default App;
