import React, { Component } from 'react';

// images
import preRelease from '../../../../../images/clients/umg/rws/manage-pre-release.png';

class PreRelease extends Component {
  render() {
    return (
      <div>
       <h2>Management of Pre-Release</h2>
        <img className="timeline" src={preRelease} alt="" />
      </div>
    );
  }
}

export default PreRelease;
