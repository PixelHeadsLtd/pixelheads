import React, { Component } from 'react';

// images
import Home from '../../../../images/clients/fullsix/fullsix-hp.jpg';

class Intro extends Component {
  render() {
    return (
      <div>
        <h2>Fullsix (Grey Interactive)</h2>
        <h3>About</h3>
        <p>Fullsix is a Design and Marketing company forming part of the larger Grey Worldwide business. We we're head-hunted from Brann Digital
          to set up the business. Our clients included Mars, Lycos, SEB Bank, Barclays Bank, Ribina, Virgin, Guinness, Monum and Setanta.
        </p>
        <p>In the left menu you'll find some of my project examples. Please note that this work was done back in 2000, during this period, Macromedia
          Flash was used extensively in web design. It was also a period before mobile and fullscreen came into being.
        </p>
        <p>My role was to create online marketing solutions for our clients. To concepualise, design and build their brand.</p>
        <img className="wauto" src={Home} alt="" />
      </div>
    );
  }
}

export default Intro;
