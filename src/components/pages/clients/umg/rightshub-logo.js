import React, { Component } from 'react';

// Scripts
import HorizontalPan from '../../../scripts/horizontal-pan';

// images
import Logo from '../../../../images/clients/pages/umg/branding-umg-rightshub-on-blk.svg';

class Logos extends Component {

  constructor(props){
    super(props);
    this.state = { pos : null }
  }

  render() {
    return (
      <div>
        <div className="positioning"><h2 className="white fixed">Universal Music: RightsHub Logo Design {this.state.pos}</h2></div>
        <div className="pan-wrapper shift-rhlogo"> {/* sets class for sibling i.e HorizontalPan */}
          <HorizontalPan direction="right">
            <section className="stuhub-logo fixed">
              <img src={Logo} alt="" />
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
                    The Rights Hub website is all about legal contracts. 
                    The centre icon represents the letter 's' but also the 
                    plan view of two people shaking hands to seal the contract.
                  </p>
              </div>
            </section>
          </HorizontalPan>
        </div>
        <div className="bg-color turquoise"></div>
      </div>
    );
  }
}

export default Logos;
