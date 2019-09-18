import React, { useState } from 'react';
import './App.css';

import Members from './Components/Member';
import MemberForm from './Components/MemberForm';
function App() {
  const [team, setTeam] = useState([{
    id: 1,
    name: 'name',
    email: 'email',
    role: 'role'
  }]);
  
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setTeam([...team, newMember])
  }

  return (
    <div className="App">
      <h1>Team Members</h1>
      <MemberForm addNewMember={addNewMember}/>
      
      <Members team={team}/>
    </div>
  );
}

export default App;
