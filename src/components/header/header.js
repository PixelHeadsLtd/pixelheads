import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    console.log(this.props);
    return (
      <header className="main-header">
          <div className="logo" title="PixelHeads Ltd"></div>
          <nav>
              <ul className="main-nav">
                  <li><NavLink exact to="/">Home</NavLink></li>
                  <li><NavLink to="/Projects">Projects</NavLink></li>
                  <li><NavLink to="/Contact">Contact</NavLink></li>
              </ul>
              <ul className="social">
                  <li><a href="https://github.com/PixelHeadsLtd" title="View GitHub Profile"></a></li>
                  <li><a href="http://www.linkedin.com/in/mike-king-0481b92" title="View LinkedIn Profile"></a></li>
              </ul>
          </nav>
      </header>
    );
  }
}

export default Header;
