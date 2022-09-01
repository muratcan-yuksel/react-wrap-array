import React, { useState } from "react";
import data from "./data";

const App = () => {
  const [index, setIndex] = useState(0);
  const { id, text } = data[index];
  return (
    <div className="container">
      <div className="title">{text} </div>
    </div>
  );
};

export default App;
