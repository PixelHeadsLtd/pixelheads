import React, { Component } from 'react';
// add className to page body
import ReactBody from 'react-body';

class Pfizer extends Component {
  render() {
    return (
      <div>
        <ReactBody className="hide" />
        <h1>Pfizer</h1>
      </div>
    );
  }
}

export default Pfizer;
