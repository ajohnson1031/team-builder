import React, { useState } from "react";
import Characters from "./Characters";
import TeamList from "./components/TeamList";
import StarForm from "./components/Form";
import "./App.css";

function App() {
  const teamState = useState(Characters);
  const fieldState = useState("");

  return (
    <div className="App">
      <header>
        <h1 className="App-header">Meet the Team</h1>
      </header>
      <StarForm characters={teamState} fieldState={fieldState} />
      <TeamList characters={teamState[0]} />
    </div>
  );
}

export default App;
