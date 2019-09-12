import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isActiveIndex: "0",
      show: false,
      showMenu: false
    }
    this.toggleActiveClass.bind(this);
    this.changeActiveMenu.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
}

toggleActiveClass(index) {
  this.setState({ isActiveIndex: index });
  this.toggleMenu();
}

changeActiveMenu(index){
  if(index >= 0 && index <= 5)
  {
    this.setState({ isActiveIndex: index });
  }
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
    //console.log(this.state.isActiveIndex);
    return (
      <header className="main-header">
        <nav className="main-nav">
          <a className={this.state.isActiveIndex === "0" ? 'active home' : ''} onClick={() => this.toggleActiveClass("0") } href='#section-home'>Home</a>
          <a className={this.state.isActiveIndex === "1" ? 'active about' : ''} onClick={() => this.toggleActiveClass("1") } href='#section-about'>About</a>
          <a className={this.state.isActiveIndex === "2" ? 'active about' : ''} onClick={() => this.toggleActiveClass("2") } href='#section-approach'>Approach</a>
          <a className={this.state.isActiveIndex === "3" ? 'active projects' : ''} onClick={() => this.toggleActiveClass("3")} href='#section-projects'>Projects</a>
          <a className={this.state.isActiveIndex === "4" ? 'active contact' : ''} onClick={() => this.toggleActiveClass("4")} href='#section-contact'>Contact</a>
        </nav>
        <div className={"main-nav-small " + (this.state.show ? 'show-menu' : '')}>
          <i onClick={ this.toggleMenu } className="menu-icon" alt=""><div></div><div></div><div></div></i>
          <div onClick={ this.toggleMenu } className="tint"></div>
          <nav>
            <a className={this.state.isActiveIndex === "0" ? 'active home' : ''} onClick={ () => this.toggleActiveClass("0") } href='#section-home'>Home</a>
            <a className={this.state.isActiveIndex === "1" ? 'active about' : ''} onClick={() => this.toggleActiveClass("1") } href='#section-about'>About</a>
            <a className={this.state.isActiveIndex === "2" ? 'active about' : ''} onClick={() => this.toggleActiveClass("2") } href='#section-approach'>Approach</a>
            <a className={this.state.isActiveIndex === "3" ? 'active projects' : ''} onClick={() => this.toggleActiveClass("3")} href='#section-projects'>Projects</a>
            <a className={this.state.isActiveIndex === "4" ? 'active contact' : ''} onClick={() => this.toggleActiveClass("4")} href='#section-contact'>Contact</a>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
