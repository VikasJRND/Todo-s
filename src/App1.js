import React, { Component } from "react";
import Navbar from "./pokitimes/Navbar";
import Home from "./pokitimes/Home";
import About from "./pokitimes/About";
import Content from "./pokitimes/Content";

import { BrowserRouter, Route } from "react-router-dom";

class App1 extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Content" component={Content} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App1;
