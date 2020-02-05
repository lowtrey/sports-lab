import React from "react";
import Team from "./Team";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Team name="Lakers" logo="/lakers.png" />
      <Team name="Warriors" logo="/warriors.png" />
    </div>
  );
}

export default App;
