import React, { Component } from 'react';

// images
import awsNav from '../../../../../images/clients/umg/aws/nav.png';
import awsArtist from '../../../../../images/clients/umg/aws/artist.png';

class Artist extends Component {
  render() {
    return (
      <div>
        <h2>AWS Website Artist Search</h2>
        <p>Below is a sample section of the AWS contextual navigation and a few pages from the main site. 
          I have an interactive Axure prototype of the working website of which I can provide upon request <a href="mailto:info@pixel-heads.com">info@pixel-heads.com</a> </p>
        <img className="aws-nav" src={awsNav} alt="" />
        <h3>Artist Search Page</h3>
        <img className="aws-artist border-dashed-light drop-shadow" src={awsArtist} alt="" />
      </div>
    );
  }
}

export default Artist;
