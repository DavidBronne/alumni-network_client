import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import { NavbarStyle } from '../styles/elements';


class Navbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <Link to="/alumni">
            <li>Alumni</li>
          </Link>
          <Link to="/job">
            <li>Job offers</li>
          </Link>
          <Link to="/event">
            <li>Events</li>
          </Link>
        </ul>
      </div>
    )
  }
}

export default Navbar;
