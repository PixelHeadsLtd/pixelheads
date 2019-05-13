import React, { Component } from 'react';

// images
import artist from '../../../../../images/clients/umg/aws/artist.png';

class Intro extends Component {
  render() {
    return (
      <div>
        <h2>AWS</h2>
          <h3>Overview</h3>
          <p>
            Assest Workspace sits under the StudioHub Repertoire application. Physical tapes from recording sessions are digitised and uploaded to the Asset Workspace website. There are currently over 
            2 million assets being managed on our stystem with many more arriving weekly. 
          </p>
          <img className="drop-shadow" src={artist} alt="" />
      </div>
    );
  }
}

export default Intro;
