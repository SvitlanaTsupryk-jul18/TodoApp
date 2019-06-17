import React from 'react';


class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="main">
                <input class="newTodo" placeholder="What needs to be done?" autofocus></input>
            </div>
        );
    }
}

export default Main;