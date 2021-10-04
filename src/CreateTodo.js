import React from "react";

export default function CreateTodo({todo}) {
    return (
        <form onSubmit= {e => e.preventDefault() } >
            <div>Description: <b>{todo}</b></div>
            <div>
                <input type="text" name="create-todo" id="create-todo" />
            </div>

            <textarea />
            <br/>
            <input type="submit" value="create" />
        </form>
    )
}