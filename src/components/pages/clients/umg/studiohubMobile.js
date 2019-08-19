import React, { Component } from 'react';

// images
//import Mobile from '../../../../images/clients/umg/lws/m-label-landing.png'; 

class StudioHubMobile extends Component {

  constructor(props){
    super(props);
    this.state = { pos : null }
  }

  render() {
    return (
      <div className="positioning label-landing-page">
        <h2>StudioHub Mobile Version</h2>
        <div className="mobile">
          {/* <img src={Mobile} alt="" /> */}
        </div>
        <div className="bg-color paleGrey"></div>
      </div>
    );
  }
}

export default StudioHubMobile;
