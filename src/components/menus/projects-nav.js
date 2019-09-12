import React, { Component } from 'react';

class ProjectsNav extends Component {
  constructor() {
      super();
      this.state = {
        show: false,
        showMenu: false
      }
      this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState((prev, props) => {
        return {
            ...prev,
            show: !prev.show
        }
    })
  }
  render() {
    return (
      <header className="main-header">
        <div className="container">
          <nav className="main-nav">
            <a href="/#section-home">Home</a>
            <a href="/#section-about">About</a>
            <a href="/#section-approach">Approach</a>
            <a className="active" href="/#section-projects">Projects</a>
            <a href="/#section-contact">Contact</a>
          </nav>
          <div className={"main-nav-small " + (this.state.show ? 'show-menu' : '')}>
            <i onClick={ this.toggleMenu } className="menu-icon" alt=""><div></div><div></div><div></div></i>
            <div className="tint"></div>
            <nav>
              <a onClick={ () => this.toggleMenu } href="/#section-home">Home</a>
              <a onClick={ () => this.toggleMenu } href="/#section-about">About</a>
              <a onClick={ () => this.toggleMenu } href="/#section-approach">Approach</a>
              <a onClick={ () => this.toggleMenu } className="active" href="/#section-projects">Projects</a>
              <a onClick={ () => this.toggleMenu } href="/#section-contact">Contact</a>
            </nav>
          </div>
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
