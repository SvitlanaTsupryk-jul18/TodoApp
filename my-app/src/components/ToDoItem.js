import React from "react"

function TodoItem(props) {
    const { completed, name, id, changeChecked, onRemove } = props;
    return (
        <div className="todo" >
            <li className="todoItem">
                <input type="checkbox"
                    className="check"
                    checked={completed}
                    onChange={() => changeChecked(id)}
                />
                <label>{name}</label>
                <button className="close"
                    onClick={() => onRemove(id)} >✕</button>
            </li>
        </ div>
    )
}

export default TodoItem