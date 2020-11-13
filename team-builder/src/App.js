import "./css/index.css";
import { Button } from "reactstrap";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import AppForm from "./components/AppForm";
import TeamList from "./components/TeamList";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  return (
    <div className='App'>
      <h1 className='header'>Form Management Example</h1>
      <Route exact path='/'>
        <Link className='form-link' to='/form'>
          <Button className='goto-form-btn'>Add Users &#8594;</Button>
        </Link>
      </Route>
      <Route path='/form'>
        <Link className='form-link' to='/'>
          <Button className='back-btn'>&#8592; Go Back</Button>
        </Link>
        <div className='break'></div>
        <AppForm users={users} setUsers={setUsers} />
        <div className='break'></div>
        <TeamList members={users} />
      </Route>
    </div>
  );
}

export default App;
