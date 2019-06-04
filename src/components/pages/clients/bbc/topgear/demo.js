import React, { Component } from 'react';

// images
import youTube from '../../../../../images/clients/bbc/topgear/youtube-page.jpg';

class Demo extends Component {
  render() {
    return (
      <div>
        <h2>TopGear demo</h2>
        <p>Please take a quick look at the <a href="../../../topgear/topgear.htm" target="_blank" title="TopGear Demo">TopGear Demo</a>. 
          You will need to have the <a href="http://get.adobe.com/en/flashplayer/" target="_blank" title="TopGear Demo">latest Flash Player</a></p>
        <img className="ipad" src={youTube} alt="" />
      </div>
    );
  }
}

export default Demo;