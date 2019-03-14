import React, { Component } from "react";

class Todolist extends Component {
  state = {
    todo: ""
  };

  render() {
    const todoList = this.props.todos.map(item => {
      return (
        <div key={item.id}>
          <span
            onClick={() => {
              this.props.deleteTodo(item.id);
            }}
          >
            <ul class="list-group">
              <li class="list-group-item">{item.content}</li>
            </ul>
          </span>
        </div>
      );
    });

    return (
      <div className="container">
        <h1>Todo's</h1>
        <div>{todoList}</div>
      </div>
    );
  }
}

export default Todolist;
