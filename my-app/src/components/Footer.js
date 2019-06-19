import React from "react"

function Footer(props) {
    return (
        <div className="footer">
            <div className="counter">{props.count} item left</div>
            <div className="buttons">
                <button type="button"
                    onClick={() => props.showTodos("all")}>All</button>
                <button type="button"
                    onClick={() => props.showTodos("active")}
                >Active</button>
                <button type="button"
                    onClick={() => props.showTodos("complited")}
                >Complited</button>
            </div>
        </div>
    )
}

export default Footer