import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <li>
                {props.value}
                {/* <input type="checkbox" checked={props.item.completed} /> */}
                <button className="close" onClick={() => props.onRemove(props.value)} >✕</button>
            </li>
        </div>
    )
}

export default TodoItem