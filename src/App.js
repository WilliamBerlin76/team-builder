import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Members from './Components/Member';
function App() {
  const [team, setTeam] = useState([{
    id: 1,
    name: 'name'
  }]);
  return (
    <div className="App">
      <h1>Team Members</h1>
      <Members team={team}/>
    </div>
  );
}

export default App;
