import React, { useState } from "react";
import Characters from "./Characters";
import TeamList from "./components/TeamList";
import "./App.css";

function App() {
  const teamState = useState(Characters);
  return (
    <div className="App">
      <header>
        <h1>Meet the Team</h1>
      </header>
      <TeamList characters={teamState[0]} />
    </div>
  );
}

export default App;
