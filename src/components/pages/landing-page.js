import React, { Component } from 'react';

import LinkedIn from '../../images/social/linkedin.svg';
import FB from '../../images/social/fb.svg';
import GitHub from '../../images/social/github.svg';

class Landing extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <h1>Hi<span className="ellipsis">...</span></h1>
        <p>I’m <a href="mailto:info@pixel-heads.com">Mike King</a> of PixelHeads Limited<br />
        A Senior UX/UI Consultant, Designer, Artist, Sculptor & Musician.<br />
        Also, as an extra string to my bow, I have some FE skills too.</p>
        <p className="intro-mobile">I’m <a href="mailto:info@pixel-heads.com">Mike King</a> of PixelHeads Limited<br />
        A Senior UX/UI Designer, Artist, Sculptor & Musician.<br />
        I have FE development skills too.</p>
        <div className="social">
          <a href="https://www.linkedin.com/in/mike-king-0481b92/" target="blank" title="View LinkedIn Profile" >
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=613721312" target="blank" title="FB">
            <img src={FB} alt="" />
          </a>
          <a href="https://github.com/PixelHeadsLtd" target="blank" title="Visit GitHub Account">
            <img src={GitHub} alt="" />
          </a>
        </div>
      </div>
    );
  }
}

export default Landing;
