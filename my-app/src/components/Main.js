import React from 'react';
import ToDoItem from './ToDoItem'


class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toDoItems: {}
        };

        this.addItem = (event) => {
            if (event.key !== 'Enter') return
            console.log(event.target.value);

            this.setState(prevState => {
                const copy = [...prevState.toDoItems, event.target.value];
                return { toDoItems: copy };
            })

        };
    };
    render() {

        return (
            <div className="main" >
                <input className="newTodo"
                    placeholder="What needs to be done?"
                    onKeyDown={this.addItem}
                    autoFocus={true} >
                </input>
                <ul>
                    {this.state.toDoItems.map((item, index) => <ToDoItem key={index} value={item} />)}

                </ul>
            </div>
        );
    }
}

export default Main;