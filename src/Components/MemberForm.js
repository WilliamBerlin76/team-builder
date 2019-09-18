import React, { useState } from 'react';

const MemberForm = props => {
    console.log(props)
    const [member, setMember] = useState({
        name:'',
        email:'',
        role:''
    })
    const handleChange = event => {
        setMember({...member, [event.target.name]: event.target.value})
        // console.log(member)
    };
    const formSubmit = event => {
        event.preventDefault();
        props.addNewMember(member);
        setMember({ name: '', email: '', role: ''})
    };
    return(
        <form onSubmit={formSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name='name' onChange={handleChange} value={member.name}/>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" onChange={handleChange} value={member.email}/>
            <label htmlFor="role">Role</label>
            <input type="text" id="role" name="role" onChange={handleChange} value={member.role}/>
            <button type="submit">Add Team Member :)</button>
        </form>
    )
}

export default MemberForm;