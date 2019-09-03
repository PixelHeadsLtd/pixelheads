import React, { Component } from 'react';
import ReactBody from 'react-body';
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';

class Tutorials extends Component {
  render() {
    return (
      <div>
        <ReactBody className="tutorials projects" />     
      </div>
    );
  }
} 

export default Tutorials;