import React, { Component } from 'react';

// images
import landingPage from '../../../../../images/clients/umg/rws/landing-page.png';

class Website extends Component {
  render() {
    return (
      <div>
       <h2>Supply Chain</h2>
        <p>
          Working with digital music outlets such as iTunes, Amazon, Spotify, Deezer and Google Play etc. 
          The SupplyChain website is where the final products are shipped to market worldwide.
        </p>
        <img src={landingPage} alt="" />
      </div>
    );
  }
}

export default Website;
