import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isActiveIndex: "0",
      show: false
    }
    this.toggleActiveClass.bind(this);
    this.changeActiveMenu.bind(this);
}

toggleActiveClass(index) {
  this.setState({ isActiveIndex: index });
};

changeActiveMenu(index){
  if(index >= 0 && index <= 4)
  {
    this.setState({ isActiveIndex: index });
  }
};
  render() {
    //console.log(this.state.isActiveIndex);
    return (
      <header className="main-header">
        <nav className="main-nav">
          <a className={this.state.isActiveIndex === "0" ? 'active home' : ''} onClick={() => this.toggleActiveClass("0") } href='#section-home'>Home</a>
          <a className={this.state.isActiveIndex === "1" ? 'active about' : ''} onClick={() => this.toggleActiveClass("1") } href='#section-about'>About</a>
          <a className={this.state.isActiveIndex === "2" ? 'active projects' : ''} onClick={() => this.toggleActiveClass("2")} href='#section-projects'>Projects</a>
          <a className={this.state.isActiveIndex === "3" ? 'active contact' : ''} onClick={() => this.toggleActiveClass("3")} href='#section-contact'>Contact</a>
        </nav>
      </header>
    );
  }
}

export default Header;
