import React, { useState } from "react";
import Characters from "./Characters";
import TeamList from "./components/TeamList";
import "./App.css";

function App() {
  const [teamState, setTeamState] = useState(Characters);
  return (
    <div className="App">
      <header />
      <TeamList characters={teamState} />
    </div>
  );
}

export default App;
