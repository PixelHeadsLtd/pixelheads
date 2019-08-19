import React, { Component } from 'react';

// images
//import HomePage from '../../../../images/clients/pages/umg/label-landing-page.png';

class StudioHub extends Component {

  constructor(props){
    super(props);
    this.state = { pos : null }
  }

  render() {
    return (
      <div className="positioning label-landing-page">
        <h2 className="white">StudioHub Label Landing Page</h2>
        {/* <img className="fixed" src={HomePage} alt="" /> */}
      </div>
    );
  }
}

export default StudioHub;
