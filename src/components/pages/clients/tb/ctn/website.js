import React, { Component } from 'react';

// images
import home from '../../../../../images/clients/tb/cn/home.jpg';

class Web extends Component {
  render() {
    return (
      <div>
          <h2>Website</h2>
          <p>The main CNN site went through regular seasonal theme changes and had to work 
            in ie6 acroos all languages including Arabic which was a bit of a chalenge.</p>
          <img src={home} alt="" />
      </div>
    );
  }
}

export default Web;
