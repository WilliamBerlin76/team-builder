import React, { useState } from 'react';

const MemberForm = props => {
    console.log(props)
    const [member, setMember] = useState({
        name:'',
        email:'',
        role:''
    })
    return(
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name='name'/>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email"/>
            <label htmlFor="role">Role</label>
            <input type="text" id="role" name="role"/>
            <button type="submit">Add Team Member :)</button>
        </form>
    )
}

export default MemberForm;