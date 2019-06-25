import React from 'react';
import ToDoItem from './ToDoItem'
import Footer from './Footer'

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toDoItems: [],
            filterParam: "all",
            filteredTodos: [],
            currentName: ''
        };

        this.addItem = (event) => {
            if (event.key !== 'Enter') return
            let newItem = event.target.value;
            event.target.value = "";

            this.setState(prevState => ({
                toDoItems: [
                    ...prevState.toDoItems,
                    {
                        id: Date.now(),
                        name: newItem,
                        completed: false
                    }
                ]
            }))
        };

        this.removeItem = (ToDoItem) => {

            this.setState(prevState => {
                const copy = [...prevState.toDoItems].filter((item) => item.id !== ToDoItem);
                return { toDoItems: copy };
            })

        };

        this.changeComplited = (ToDoItem) => {

            this.setState(prevState => {
                const copy = [...prevState.toDoItems];
                copy.forEach((item) => {
                    if (item.id === ToDoItem) {
                        item.completed = !item.completed
                    }
                })
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
        // const visibleItems = this.state.toDoItems.filter(

        // )
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
                    {/* {this.state.filteredTodos && */}
                    {this.state.toDoItems.map((item) =>
                        <ToDoItem key={item.id}
                            id={item.id}
                            name={item.name}
                            onRemove={this.removeItem}
                            completed={this.state.completed}
                            changeChecked={this.changeComplited}
                        />)}
                </ul>
                <Footer count={(this.state.filteredTodos).length}
                    showTodos={this.setFilter} />
            </div>
        );
    }
}

export default Main;