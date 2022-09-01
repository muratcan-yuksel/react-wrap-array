import React, { useState } from "react";
import data from "./data";
import "./style.css";

const App = () => {
  const [index, setIndex] = useState(0);
  const { id, text } = data[index];
  return (
    <div className="container">
      <div className="title">{text} </div>
      <div className="buttons">
        <button className="btn">Previous</button>
        <button className="btn">Next</button>
      </div>
    </div>
  );
};

export default App;
