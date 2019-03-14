import React, { Component } from "react";
import Addtodo from "./Addtodo";
import Todolist from "./Todolist";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "morning walk" },
      { id: 2, content: "complete react ASAP" },
      { id: 3, content: "tasks need to get deleiver" }
    ]
  };

  deleteTodo = id => {
    console.log("...................", id);

    const newList = this.state.todos.filter(item => {
      return item.id !== id;
    });

    this.setState({
      todos: newList
    });
  };

  addnewtodo = todo => {
    const new_todo = {
      id: this.state.todos.length + 1,
      content: todo
    };
    const todos = [...this.state.todos, new_todo];
    this.setState({
      todos: todos
    });
  };

  render() {
    return (
      <div className="App">
        <Todolist todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <Addtodo addnewtodo={this.addnewtodo} />
      </div>
    );
  }
}

export default App;
