import React from "react"

function TodoItem(props) {
    // const{completed,name,}
    return (
        <div className="todo" >
            <li className="todoItem">
                <input type="checkbox"
                    className="check"
                    checked={props.completed}
                    onChange={() => props.changeChecked(props.value)}
                />
                <label>{props.name}</label>
                <button className="close"
                    onClick={() => props.onRemove(props.id)} >✕</button>
            </li>
        </ div>
    )
}

export default TodoItem