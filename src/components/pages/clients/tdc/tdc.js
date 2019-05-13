import React, { Component } from 'react';
// add className to page body
import ReactBody from 'react-body';

class TDC extends Component {
  render() {
    return (
      <div>
        <ReactBody className="hide" />
        <h1>The Discovery Channel</h1>
      </div>
    );
  }
}

export default TDC;
