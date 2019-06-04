import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="logo" title="PixelHeads Ltd"></div>
          <nav>
              <ul>
                  <li><label>Recent Projects</label></li>
                  <li><a href="./StudioHubStyleGuides/index.htm" target="_blank">Universal Music Style Guides</a></li>
                  <li><a href="./research/Research.zip" target="_blank">UX Research for UMG</a></li>
                  <li><a href="./research/Wireframes.zip" target="_blank">UMG Platform Wireframes</a></li>
                  <li><a href="./research/Workflows.zip" target="_blank">User Journey Workflows for UMG</a></li>
              </ul>
              <ul>
                  <li><label>Connect</label></li>
                  <li><a href="https://github.com/PixelHeadsLtd" target="_blank" title="View GitHub Profile">View GitHub Profile</a></li>
                  <li><a href="http://www.linkedin.com/in/mike-king-0481b92" target="_blank" title="View LinkedIn Profile">View LinkedIn Profile</a></li>
                  <li><a href="./cv/SeniorUXConsultant.doc" target="_blank">Download a copy of my latest CV</a></li>
              </ul>
          </nav>
      </footer>
    );
  }
}

export default Footer;
