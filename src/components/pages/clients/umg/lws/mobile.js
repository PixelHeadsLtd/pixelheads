import React, { Component } from 'react';

// images
import mobileLanding from '../../../../../images/clients/umg/lws/m-label-landing.png';
import ipadLanding from '../../../../../images/clients/umg/lws/m-label-landing-ipad.png';

class Mobile extends Component {
  render() {
    return (
      <div className="mobile">
        <h2>LWS Mobile</h2>
        <img src={mobileLanding} alt="" />
        <span className="pointer p-label">
          <span></span>
          <p>Label Logo associated with this particular Artist</p>
        </span>
        <span className="pointer p-search">
          <span></span>
          <p>Project Search</p>
        </span>
        <span className="pointer p-art">
          <span></span>
          <p>Resulting Artist preview. Clicking here will take users to Label Management for this Artist</p>
        </span>
        <span className="pointer p-thumbs">
          <span></span>
          <p>
            All projects display as thumbnails. Located at the base of the mobile device enabling users to 
            easily thumb through the results from left to right.
          </p>
        </span>
        <section className="info-divider">
          Along with the desktop version of StudioHub, I also designed and developed a mobile version. 
          Because of the complexity involved in delivering a product to market, only a limited proportion of the application 
          suite is available via mobile.
        </section>
        <img className="ipad" src={ipadLanding} alt="" />
      </div>
    );
  }
}

export default Mobile;
