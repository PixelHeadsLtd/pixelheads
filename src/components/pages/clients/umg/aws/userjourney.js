import React, { Component } from 'react';
import Magnifier from "react-magnifier";

// images
import awsUserJourney from '../../../../../images/clients/umg/aws/AWS-User-Journey-Large.png';

class UserJourney extends Component {
  render() {
    return (
      <div>
        <h2>AWS User Journey</h2>
        <nav className="contextual-links">
          <a className="download-pdf" href="../../../../../images/clients/umg/aws/AWS-User-Journey.pdf" download="AWS User Journey">Download PDF</a>
        </nav>
        <div className="clear aws-user-journey">
          <Magnifier src={awsUserJourney} width={1000} />;
        </div>
      </div>
    );
  }
}

export default UserJourney;
