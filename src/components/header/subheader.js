import React, { Component } from 'react';

class SubHeader extends Component {
  render() {
    console.log(this.props);
    return (
      <header className="sub-header">
        <section>
          <h1 className="menu-title">Menu</h1>
          <h1>{ this.props.title.name }</h1>
        </section>
      </header>
    );
  }
}

export default SubHeader;
