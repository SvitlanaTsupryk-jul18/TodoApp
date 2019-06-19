import React from "react"

function TodoItem(props) {
    return (
        <div className="todo" >
            <li className="todoItem">
                <input type="checkbox"
                    className="check"
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