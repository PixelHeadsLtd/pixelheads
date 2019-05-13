import React, { Component } from 'react';

// images
import styleguides from '../../../../../images/clients/umg/lws/styleguides.png';

class Styleguides extends Component {
  render() {
    return (
      <div>
        <h2>Styleguides</h2>
          <p>Please take a quick look at the <a href="../../../StudioHubStyleGuides/index.htm" target="_blank" title="UMG Syleguides">UMG Styleguides</a> microsite.</p>
          <img src={styleguides} alt="" />
      </div>
    );
  }
}

export default Styleguides;
