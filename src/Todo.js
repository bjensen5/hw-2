import React from "react";

export default function Todo({ title, description, dateCreated, complete, dateCompleted}) {
    return (
        <div>
            <h3>{title}</h3>
            <div>{description}</div>
            <br />
            {dateCreated} <br/> <b>{complete}</b>
            <i><b>{dateCompleted}</b></i>
        
            <br/>
        </div>
    )
}