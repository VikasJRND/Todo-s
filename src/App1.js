import React, { Component } from "react";
import Navbar from "./pokitimes/Navbar";
import Home from "./pokitimes/Home";
import About from "./pokitimes/About";
import Content from "./pokitimes/Content";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App1 extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route path="/" exact Component={Home} />
          <Route path="/About" Component={About} />
          <Route path="/Content" Component={Content} />
        </div>
      </Router>
    );
  }
}

export default App1;
