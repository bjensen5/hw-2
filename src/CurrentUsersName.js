import React, { useState } from 'react';

export default function CurrentUsersName() {
    const [ name, setName ] = useState('')
    const [ lastname, setLastName ] = useState('')

    function handleNameChange(evt) {
        setName(evt.target.value)
    }

    function handleLastNameChange(evt) {
        setLastName(evt.target.value)
    }

    return (
        <div>
            <h1>Welcome {name} {lastname} </h1>
            <input type="text" value={name} onChange={handleNameChange} />
            <input type="text" value={lastname} onChange={handleLastNameChange} />
        </div>
    )
}