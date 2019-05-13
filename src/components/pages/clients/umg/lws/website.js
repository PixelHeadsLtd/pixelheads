import React, { Component } from 'react';

// images
import lwsMockup from '../../../../../images/clients/umg/lws/lws-mockup.png';
import labelLanding from '../../../../../images/clients/umg/lws/label-landing-page.png';

class Website extends Component {
  render() {
    return (
      <div>
       <h2>LWS Website</h2>
        <p>
          The UNG Plaform is a huge piece of work and the site is quite extensive. The below example is just to provide a small glimpse
          of the Reertoire site. Please contact us if you would like to view more examples.
        </p>
        <img src={lwsMockup} alt="" />
        <img src={labelLanding} alt="" />
      </div>
    );
  }
}

export default Website;
