import React, { Component } from 'react';

// images
import awsArtist from '../../../../../images/clients/umg/aws/project.png';

class Project extends Component {
  render() {
    return (
      <div>
        <h2>AWS Website Project</h2>
        <img className="aws-artist border-dashed-light drop-shadow" src={awsArtist} alt="" />
      </div>
    );
  }
}

export default Project;
