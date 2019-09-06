import React, { Component } from 'react';

class ProjectsNav extends Component {
  render() {
    return (
      <header className="main-header">
        <div className="container">
          <nav className="main-nav">
              <a href="/#section-home">Home</a>
              <a href="/#section-about">About</a>
              <a className="active" href="/#section-projects">Projects</a>
              <a href="/#section-contact">Contact</a>
            </nav>
            <a className="top" href='#top'>
              <div className="top-arrow"></div>
              <div className="bottom-arrow"></div>
              <label>top</label>
            </a>
        </div>
      </header>
    );
  }
} 

export default ProjectsNav;
