import React, { useState } from 'react';

export default function CreateTodo( { user, dispatch } ) {

    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ dateCreated, setDateCreated ] = useState('')
    const [ complete, setComplete ] = useState('')
    const [ dateCompleted, setDateCompleted ] = useState('')

    function handleTitle(evt) {
        setTitle(evt.target.value)
    }

    function handleDescription(evt) {
        setDescription(evt.target.value)
    }

    function handleDateCreated() {
        setDateCreated( Date().toString())
    }

    function handleComplete(evt) {
        setComplete(evt.target.value)
    }

    function handleDateCompleted(evt) {
        setDateCompleted(evt.ttarget.value)
    } 


    return (
        <form onSubmit= { e => { e.preventDefault(); dispatch( { type: "CREATE_TODO", title, description }); } }>
            <div>
                <label htmlFor="create-title">Title:</label>
                <input type="text" value={title} onChange={handleTitle} name="create-todo" id="create-todo" />
            </div>

            <textarea value={description} onChange={handleDescription} />
            <input type="submit" value="Create" />
        </form>
    )
}