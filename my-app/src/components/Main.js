import React from 'react';
import ToDoItem from './ToDoItem'
import Footer from './Footer'

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toDoItems: {},
            filterParam: "all",
            filteredTodos: {}
        };

        this.addItem = (event) => {
            if (event.key !== 'Enter') return
            let newItem = event.target.value;
            event.target.value = "";

            this.setState(prevState => {
                const copy = { ...prevState.toDoItems };
                copy[newItem] = false;
                return { toDoItems: copy };
            })
            this.filtered();
        };

        this.removeItem = (ToDoItem) => {

            this.setState(prevState => {
                const copy = { ...prevState.toDoItems };
                delete copy[ToDoItem];
                return { toDoItems: copy };
            })
            this.filtered();
        };

        this.changeComplited = (ToDoItem) => {

            this.setState((prevState) => {
                const copy = { ...prevState.toDoItems };
                copy[ToDoItem] = !copy[ToDoItem];
                return { toDoItems: copy };
            });
            this.filtered();
        };

        this.setFilter = (param) => {

            this.setState({ filterParam: param }, function () { this.filtered() });
        };

        this.filtered = () => {

            this.setState((prevState) => {
                const copy = { ...prevState.toDoItems };

                if (this.state.filterParam === "active") {
                    for (let key in copy) {
                        if (copy[key] !== false) {
                            delete copy[key];
                        }
                    }
                } else if (this.state.filterParam === "complited") {
                    for (let key in copy) {
                        if (copy[key] === false) {
                            delete copy[key];
                        }
                    }
                }
                return { filteredTodos: copy };
            })
        }
    };

    render() {

        return (
            <div className="main" >
                <div className="arrow">
                    <input className="newTodo"
                        placeholder="What needs to be done?"
                        onKeyDown={this.addItem}
                        autoFocus={true} >
                    </input>
                </div>
                <ul className="list">
                    {this.state.filteredTodos &&
                        Object.keys(this.state.filteredTodos).map((item, index) =>
                            <ToDoItem key={index}
                                value={item}
                                onRemove={this.removeItem}
                                completed={this.state.toDoItems[item]}
                                changeChecked={this.changeComplited}
                            />)}
                </ul>
                <Footer count={Object.keys(this.state.filteredTodos).length}
                    showTodos={this.setFilter} />
            </div>
        );
    }
}

export default Main;