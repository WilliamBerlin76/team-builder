import React from 'react';

const Members = props => {
    return(
       <> 
        {props.team.map(member => (
            
            <div key={member.id}>
                <h2>{member.name}</h2>
                <p>{member.email}</p>
                <p>{member.role}</p>
            </div>
            
        ))}
        </>
    )
}

export default Members;