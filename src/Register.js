import React, { useState } from "react";

export default function Register( { dispatchUser } ) {

    const [ formData, setFormData ] = useState({
        username: "",
        password: "",
        passwordRepeat: "",
    })

    return (
        <form onSubmit={e => { e.preventDefault(); dispatchUser( { type:"REGISTER", username:formData.username } ); }}>
            <label htmlFor="register-username">Username:</label>
            <input type="text" value={formData.username} onChange={ e => setFormData( {...formData, username: e.target.value } ) } name="register-username" id="register-username" />
            
            <label htmlFor="register-password">Password:</label>
            <input type="text" value={formData.password} onChange={ e => setFormData( {...formData, password: e.target.value } ) } name="register-password" id="register-password" />
            
            <label htmlFor="register-password-repeat">Password:</label>
            <input type="text" value={formData.passwordRepeat} onChange={ e => setFormData( {...formData, passwordRepeat: e.target.value} ) } name="register-password-repeat" id="register-password-repeat" />

            <input type="submit" value="Register" disabled={ formData.username.length === 0 || formData.password.length === 0 || formData.password !== formData.passwordRepeat } />
        </form>
    )
}