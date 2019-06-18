import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item" >
            <li>
                <input type="checkbox"
                    checked={props.completed}
                    onChange={() => props.changeChecked(props.value)}
                />
                {props.value}
                <button className="close"
                    onClick={() => props.onRemove(props.value)} >✕</button>
            </li>
        </ div>
    )
}

export default TodoItem