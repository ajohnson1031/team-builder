import React, { useState } from "react";
import Characters from "./Characters";
import TeamList from "./components/TeamList";
import StarForm from "./components/StarForm";
import "./App.css";

function App() {
  let chars = Characters;
  const teamState = useState(chars);
  const fieldState = useState({ name: "", rank: "", serial: "", img: "" });
  const createNewTeamMate = info => {
    teamState[1]([...teamState[0], info]);
    fieldState[1]({ name: "", rank: "", serial: "", img: "" });
  };
  return (
    <div className="App">
      <header>
        <h1 className="App-header">Meet the Team</h1>
      </header>
      <StarForm
        characters={teamState}
        fieldState={fieldState}
        createNewTeamMate={createNewTeamMate}
      />
      <TeamList characters={teamState} />
    </div>
  );
}

export default App;
