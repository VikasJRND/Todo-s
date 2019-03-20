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
            {/* <a href="/Home">Home</a> */}
          </li>
          <li>
            <Link to="/">Home</Link>
            {/* <a href="/About">About</a> */}
          </li>
          <li>
            <Link to="/">Home</Link>
            {/* <a href="/Content">Content</a> */}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
