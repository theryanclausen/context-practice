import React from "react";
import TodoContext from "./TodoContext";
import NestedTodo from "./NestedTodo";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          item: "Do the dishes",
          completed: false
        }
      ]
    };
  }

  addItem = newItem =>{
      this.setState({todos: [...this.state.todos, {item: newItem, completed: false}]})
  }

  checkBox = targetItem =>{
    let itemMap = this.state.todos.map(todo => todo.item)
    let item = targetItem.target.innerText
    let itemIDX = itemMap.indexOf(item)
    let altered = [...this.state.todos]
    altered.splice(itemIDX, 1, {item:item, completed: !this.state.todos[itemIDX]['completed']})
    this.setState({todos:altered})
  }

  clearCompleted = () =>{
      let filtered = this.state.todos.filter(x => !x.completed)
      this.setState({todos:filtered})
  }

  render() {
    const todoObj = {
        todos:this.state.todos,
        addItem: this.addItem,
        checkBox: this.checkBox,
        clearCompleted: this.clearCompleted
    };
    return (
      <div>
        <h3>To-do List</h3>
        <TodoContext.Provider value={todoObj}>
          <NestedTodo />
        </TodoContext.Provider>
      </div>
    );
  }
}

export default Todo;
