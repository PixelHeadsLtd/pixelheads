import React, { Component } from 'react';
// add className to page body
import ReactBody from 'react-body';

class BBC extends Component {
  render() {
    return (
      <div>
        <ReactBody className="hide" />
        <h1>BBC</h1>
      </div>
    );
  }
}

export default BBC;
