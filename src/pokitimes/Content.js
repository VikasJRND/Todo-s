import React, { Component } from "react";
class Home extends Component {
  state = {};

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <h4>Content</h4>
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
