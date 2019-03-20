import React, { Component } from "react";
class Home extends Component {
  state = {};
  login = () => {
    this.props.history.push("/about");
  };
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        <button onClick={this.login}>Login</button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores
          praesentium ea ab repellat natus quia animi minus! Aperiam blanditiis
          facere id! Impedit provident sapiente a asperiores eos fugiat vero!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores
          praesentium ea ab repellat natus quia animi minus! Aperiam blanditiis
          facere id! Impedit provident sapiente a asperiores eos fugiat vero!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores
          praesentium ea ab repellat natus quia animi minus! Aperiam blanditiis
          facere id! Impedit provident sapiente a asperiores eos fugiat vero!
        </p>
      </div>
    );
  }
}

export default Home;
