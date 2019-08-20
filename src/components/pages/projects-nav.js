import React, { Component } from 'react';

import PixelHeadsLogo from '../../images/pixelheads-logo.svg'

class ProjectsNav extends Component {
  render() {
    return (
      <div>
        <nav className="main-nav">
          <a href="/#section-home">Home</a>
          <a href="/#section-about">About</a>
          <a className="active" href="/#section-projects">Projects</a>
          <a href="/#section-contact">Contact</a>
        </nav>
        <img src={PixelHeadsLogo} alt="" />
      </div>
    );
  }
} 

export default ProjectsNav;
