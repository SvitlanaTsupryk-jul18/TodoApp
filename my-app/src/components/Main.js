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
            let newItem = event.target.value;
            event.target.value = "";

            this.setState(prevState => {
                const copy = { ...prevState.toDoItems };
                copy[newItem] = false;
                console.log(newItem, copy)
                return { toDoItems: copy };
            })
        };

        this.removeItem = (ToDoItem) => {

            this.setState(prevState => {
                const copy = { ...prevState.toDoItems };
                delete copy[ToDoItem];
                return { toDoItems: copy };
            })
        };


        this.changeComplited = (ToDoItem) => {

            this.setState((prevState) => {
                const copy = { ...prevState.toDoItems };
                copy[ToDoItem] = !copy[ToDoItem];
                return { toDoItems: copy };
            });

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
                    {this.state.toDoItems &&
                        Object.keys(this.state.toDoItems).map((item, index) =>
                            <ToDoItem key={index}
                                value={item}
                                onRemove={this.removeItem}
                                completed={this.state.toDoItems[item]}
                                changeChecked={this.changeComplited}
                            />)}
                </ul>
            </div>
        );
    }
}

export default Main;