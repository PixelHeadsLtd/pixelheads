import React, { Component } from 'react';

// images
import youTube from '../../../../../images/clients/bbc/topgear/youtube-page.jpg';

class Intro extends Component {
  render() {
    return (
      <div>
        <h2>Introduction</h2>
          <h3>Overview</h3>
          <p>
            Working within BBC Worlwide as a Senior UX/UI Designer/Developer, my role was to redesign the BBC TopGear Website and BBC Motion Gallery.
          </p>
          <img src={youTube} alt="" />
      </div>
    );
  }
}

export default Intro;
