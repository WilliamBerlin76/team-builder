import React, { useState } from 'react';
import './App.css';

// import Members from './Components/Member';
import MemberForm from './Components/MemberForm';
function App() {
  const [team, setTeam] = useState([{
    id: 1,
    name: 'name',
    email: 'email',
    role: 'role'
  }]);
  return (
    <div className="App">
      <h1>Team Members</h1>
      <MemberForm/>
      {/* <Members team={team}/> */}
    </div>
  );
}

export default App;
