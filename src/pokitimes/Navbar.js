import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="nav-wrapper red darken-3">
        <a href="/logo" className="brand-logo ">
          Logo
        </a>
        <ul className=" right ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/content">Content</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
