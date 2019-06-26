import React from 'react';
import ToDoItem from './ToDoItem'
import Footer from './Footer'

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toDoItems: [],
            filterParam: "all",
            currentValue: ''
        };

        this.setValue = (event) => {
            this.setState({ currentValue: event.target.value })
        }

        this.addItem = (event) => {

            this.setState(prevState => ({
                toDoItems: [
                    ...prevState.toDoItems,
                    {
                        id: Date.now(),
                        name: prevState.currentValue,
                        completed: false
                    }
                ],
                currentValue: ''
            }))
            event.preventDefault();
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
        };

        this.setFilter = (param) => {
            this.setState({ filterParam: param });
        };

        this.filter = () => {
            let copy = [...this.state.toDoItems];
            let filteredItems;
            switch (this.state.filterParam) {
                case "active":
                    filteredItems = copy.filter(item => item.completed === false);
                    break;
                case "completed":
                    filteredItems = copy.filter(item => item.completed === true);
                    break;
                default: filteredItems = copy;
            }
            return filteredItems;
        };
    }

    render() {
        const filteredTodos = this.filter();
        return (
            <div className="main" >
                <div className="arrow">
                    <form onSubmit={this.addItem}>
                        <input className="newTodo"
                            placeholder="What needs to be done?"
                            autoFocus={true}
                            value={this.state.currentValue}
                            onChange={this.setValue}>
                        </input>
                    </form>
                </div>
                <ul className="list">
                    {filteredTodos.map((item) =>
                        <ToDoItem key={item.id}
                            id={item.id}
                            name={item.name}
                            onRemove={this.removeItem}
                            completed={this.state.completed}
                            changeChecked={this.changeComplited}
                        />)}
                </ul>
                <Footer count={filteredTodos.length}
                    showTodos={this.setFilter}
                />
            </div>
        );
    }
}

export default Main;