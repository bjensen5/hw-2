import React, { useState } from 'react'

export default function Login( { dispatchUser } ) {

    const [username, setUsername] = useState('')

    function handleUsername(evt) {
        setUsername(evt.target.value)
    }

    return(
        <div>
            <h1>
                Welcome {username}
            </h1>
    
            <form onSubmit={evt => { evt.preventDefault(); dispatchUser( { type:"LOGIN", username } ); } }>
            <label htmlFor="login-username">Username:</label>
            <input type="text" value={username} onChange={handleUsername} name="login-username" id="login-username" />

            <label htmlFor="login-password">Password:</label>
            <input type="text" name="login-password" id="login-password" />

            <input type="submit" value="Login" />
        </form>
        </div>
    
        )
}

