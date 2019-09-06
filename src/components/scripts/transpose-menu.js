import React, { Component } from 'react';

class Opacity extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    window.addEventListener('scroll', () => {
       let activeClass = '';
       if(window.scrollY > 400){
           activeClass = 'transpose-menu';
       }
       this.setState({ activeClass });
    });
}

  render() {
    return (
      <div className={`${this.state.activeClass}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Opacity;
