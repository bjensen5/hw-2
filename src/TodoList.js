import React from "react";
import Todo from "./Todo";

export default function TodoList({Todos =[]}) {
    return (
        <div>
            {Todos.map((p, i) => <Todo {...p} key={'Todo-' + i} />)}
        </div>
    )
}