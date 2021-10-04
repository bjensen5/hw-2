import React from "react";
import Todo from "./Todo";

export default function TodoList( { todos =[] } ) {
    return (
        <div>
            {todos.map((t, i) => <Todo {...t} title={t.title} description={t.description} dateCreated={t.dateCreated} complete={t.complete} dateCompleted={t.dateCompleted} key={'todo-' + i} />)}
        </div>
    )
}