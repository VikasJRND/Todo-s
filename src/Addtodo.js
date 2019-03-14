import React, { Component } from "react";
class Addtodo extends Component {
  state = {
    todo: ""
  };

  handleclick = () => {
    this.props.addnewtodo(this.state.todo);
  };

  handlechange = e => {
    const todo = e.target.value;

    this.setState({
      todo: todo
    });
  };

  render() {
    return (
      <div
        class="container"
        style={{ height: "10%", marginLeft: "20%", marginTop: "2%" }}
      >
        <div class="input-group mb-3">
          <input
            className="form-control col-md-6"
            type="text"
            onChange={this.handlechange}
          />
          <div class="input-group-append">
            <button onClick={this.handleclick} className="btn btn-dark">
              Add Todo
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Addtodo;
