import React from "react"

function Footer(props) {
    const { count, showTodos } = props;
    return (
        <div className="footer">
            <div className="counter">{count} item left</div>
            <div className="buttons">
                <button type="button"
                    onClick={() => showTodos("all")}>All</button>
                <button type="button"
                    onClick={() => showTodos("active")}
                >Active</button>
                <button type="button"
                    onClick={() => showTodos("completed")}
                >Completed</button>
            </div>
        </div>
    )
}

export default Footer