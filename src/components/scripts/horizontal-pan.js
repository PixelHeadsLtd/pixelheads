import React, { Component } from 'react';

class HorizontalPan extends Component {
  constructor(props){
    super(props);
    this.element = React.createRef();
    if(props.direction === "left"){
      this.direction = 100;
    }
    else {
      this.direction = -100;
    }
   
  }

  // start fading
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.element.current.style.left =  this.direction + "%";
    this.setState({element: this.element})
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  sigmoid(t) {
    var x = t * 0.002;
    var y = 1/(1+Math.pow(Math.E, x));
    y = y - 0.5;
    return y * 2;

    //return ((1/(1+Math.pow(Math.E, -t * 0.8))) - 0.5) * 2;
  }

  handleScroll = () => {
    let y = this.state.element.current.getBoundingClientRect().y; // offset for when opacity begins
    let left = 0;

    if(y !== 0) { // after in view
      let distanceFactor = this.sigmoid(y);
      left = this.direction * distanceFactor;
    }

    // console.log(y);


    // else if(distance !== 0 && y < 0) { // before in view
    //   left = -100/Math.abs(distance) + '%';
    // }

    this.element.current.style.left = `${ left + "%" }`;
  };

  render() {
    return (
      <div ref={this.element}>
        {this.props.children}
      </div>
    );
  }
}

export default HorizontalPan;
