import React, {useState} from 'react'

export default function Todos() {
    const [todo, setTodo] = useState('todo')

    function handleNameChange(evt) {
        setTodo(evt.target.value)
    }

    return(
        <div>
            <h1>
                Create new {todo}
            </h1>
            <input type="text" value={todo} onChange={handleNameChange} />
        </div>
        )
}

