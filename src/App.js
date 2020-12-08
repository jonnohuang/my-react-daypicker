import React from "react";
import PickDay from "./Components/PickDay";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Simple Calender App</h1>
      <h2>Calender Day Picker</h2>
      <PickDay />
    </div>
  );
}
