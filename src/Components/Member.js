import React from 'react';

const Members = props => {
    return(
       <> 
        {props.team.map(item => {
            <h2>{item.name}</h2>
        })}
        </>
    )
}

export default Members;