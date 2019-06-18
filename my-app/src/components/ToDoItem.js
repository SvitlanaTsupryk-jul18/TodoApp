import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <li>
                {props.value}
                {/* <input type="checkbox" checked={props.item.completed} /> */}
                <button className="close">✕</button>
            </li>
        </div>
    )
}

export default TodoItem