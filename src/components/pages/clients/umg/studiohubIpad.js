import React, { Component } from 'react';

// images
//import iPad from '../../../../images/clients/umg/lws/m-label-landing-ipad.png';

class StudioHubIpad extends Component {

  constructor(props){
    super(props);
    this.state = { pos : null }
  }

  render() {
    return (
      <div className="positioning label-landing-page">
        <h2>StudioHub Mobile Version</h2>
        <div className="mobile ipad">
          {/* <img src={iPad} alt="" /> */}
        </div>
        <div className="bg-color paleGrey"></div>
      </div>
    );
  }
}

export default StudioHubIpad;
