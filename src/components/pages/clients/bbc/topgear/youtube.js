import React, { Component } from 'react';

// images
import youTube from '../../../../../images/clients/bbc/topgear/youtube-page.jpg';

class YouTube extends Component {
  render() {
    return (
      <div>
        <h2>YouTube Sponsorship</h2>
        <img src={youTube} alt="" />
      </div>
    );
  }
}

export default YouTube;