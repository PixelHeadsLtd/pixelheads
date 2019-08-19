import React, { Component } from 'react';

import PixelHeadsLogo from '../../images/pixelheads-logo.svg';

class Contact extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Contact</h1>
        <img src={PixelHeadsLogo} alt="" />
        <ul className="contact-panel">
          <li>07946 214544</li>
          <li>London</li>
          <li><a href="mailto:info@pixel-heads.com">info@pixel-heads.com</a></li>
        </ul>
      </div>
    );
  }
} 

export default Contact;
