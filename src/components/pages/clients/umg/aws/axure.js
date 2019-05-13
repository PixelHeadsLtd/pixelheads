import React, { Component } from 'react';

// images
import axureDemo from '../../../../../images/clients/umg/aws/axure-demo.png';

class Axure extends Component {
  render() {
    return (
      <div>
        <h2>AWS Design - Axure Prototype</h2>
        <nav className="contextual-links">
          <a href="../../../axure-demo/index.html" target="_blank">View Axure Prototype</a>
        </nav>
        <h4 className="w100">Note</h4>
        <p>Only a few sections of the demo are viewable. To see these sections, within the demo
          please click the "show interactive points" link in the top right hand side of the top banner</p>
        <img className="mw900" src={axureDemo} alt="" />
      </div>
    );
  }
}

export default Axure;
