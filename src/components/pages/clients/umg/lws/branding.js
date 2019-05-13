import React, { Component } from 'react';

// images
import stuhubLogo from '../../../../../images/clients/umg/logo-design/branding-umg-studiohub-on-wht.svg';
import icons from '../../../../../images/clients/umg/lws/icons.svg';

class Branding extends Component {
  render() {
    return (
      <div>
        <h2>StudioHub Logo</h2>
          <section className="stuhub-logo">
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
                  Power button. Modified to flow with main characters.
                </p>
                <p>
                  The concept being to Power up studio hub, 
                  this would work for both video and audio.
                </p>
                <p>
                  The triangle on the ‘i’ replaces the dot and represents a
                  flag to exemplify studio hub as the central point. 
                </p>
            </div>
          </section>
          <h3>Bespoke Icons</h3>
          <img className="mw400" src={icons} alt="" />
      </div>
    );
  }
}

export default Branding;
