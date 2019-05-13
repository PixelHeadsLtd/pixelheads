import React, { Component } from 'react';

// images
import stuhubLogo from '../../../../../images/clients/umg/logo-design/branding-umg-rightshub-on-wht.svg';

class Branding extends Component {
  render() {
    return (
      <div>
        <h2>RightsHub Logo</h2>
          <section className="stuhub-logo rightshub-logo">
            <span className="v-box-outer">
              <span></span>
              <span></span>
            </span>
            <span className="h-box-outer">
              <span></span>
            </span>
            <img src={stuhubLogo} alt="" />
            <div className="umg-font-info">
                <h3>Font: </h3>
                <p>
                  The font was designed in Adobe Illustrator from the base font ‘Swis721 Th BT’ forming 
                  the character composition.
                </p>
                <p>
                  Alterations include the following:
                  Removal of serifs on the characters ‘u’, ‘d’ and ‘b’ 
                  Descenders and Extenders redrawn and at different weights and lengths
                  Rounded corners added to all endpoints
                  Additional Graphics incorporated to form the overall design.
                </p>
            </div>
            <div className="umg-graphics-info">
                <h3>Graphics</h3>
                <p>
                  The Rights Hub website is all about legal contracts. The centre icon represents the letter 's' but also 
                  the plan view of two people shaking hands to seal the contract.
                </p>
            </div>
          </section>
      </div>
    );
  }
}

export default Branding;
