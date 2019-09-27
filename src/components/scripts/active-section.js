import React, { Component } from 'react';

class ActiveSection extends Component {
  // start fading
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.element = React.createRef();
    this.setState({element: this.element})

  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
   }

  handleScroll = () => {
    if(this.checkVisible(this.state.element.current)) { // after in view
      //console.log(this.props.index);
      this.props.refToMenu.current.changeActiveMenu(this.props.index)
    }  
  };

  render() {
    return (
      <div ref={this.element}>
        {this.props.children}
      </div>
    );
  }
}

export default ActiveSection;
