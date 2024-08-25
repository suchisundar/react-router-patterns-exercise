import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import RouteList from "./RouteList";

function App() {
  const [colors, setColors] = useState([]);

  const addColor = (color) => {
    setColors(prevColors => [color, ...prevColors]);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Welcome to the Color Factory!</h1>
        <Link to="/colors/new">Add New Color</Link>
        <RouteList colors={colors} addColor={addColor} />
      </div>
    </BrowserRouter>
  );
}

export default App;
