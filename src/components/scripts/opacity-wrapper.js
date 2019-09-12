import React, { Component } from 'react';

class Opacity extends Component {
  constructor(props) {
    super(props);
    this.state = {opacity: 1};
  }

  // start fading
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.element = React.createRef();
    this.setState({element: this.element});
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    let y = this.state.element.current.getBoundingClientRect().y -200; // offset for when opacity begins
    let distance = y * 0.01; // distance smoothing
    let opacity = 1;
    if(distance !== 0 && y < 350) { // after in view
      opacity = 1/Math.abs(distance);
    }
    else if(distance !== 0 && y > -350) { // before in view
      opacity = 1/Math.abs(distance);
    }
    if(opacity < 0.2){
      opacity = 0;
    }
    this.setState({opacity: opacity});
  };

  render() {
    const divStyle = {
      opacity: this.state.opacity,
    };

    return (
      <div ref={this.element} style={divStyle}>
        {this.props.children}
      </div>
    );
  }
}

export default Opacity;
