import React, { Component } from 'react';

// images
import rights1 from '../../../../../images/clients/umg/rights/rights.png';
import rights2 from '../../../../../images/clients/umg/rights/rights2.png';
import rights3 from '../../../../../images/clients/umg/rights/rights3.png';

class Website extends Component {
  render() {
    return (
      <div>
       <h2>Rights Hub</h2>
       <p>
          All legal contracts are managed via the RightsHub application, these include: Producer, Arist, Side Artists and Distrubution Agreements.
        </p>
        <img className="rights drop-shadow" src={rights3} alt="" />
        <img className="rights drop-shadow" src={rights2} alt="" />
        <img className="drop-shadow" src={rights1} alt="" />
      </div>
    );
  }
}

export default Website;
