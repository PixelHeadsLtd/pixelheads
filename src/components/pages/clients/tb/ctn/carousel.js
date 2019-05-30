import React, { Component } from 'react';

// images
import carousel from '../../../../../images/clients/tb/cn/carousel.gif';

class Carousel extends Component {
  render() {
    return (
      <div>
          <h2>Site Navigation Carousel</h2>
          <p>View the Carousel here <a href="../../../Carousel/carousel.htm" target="_blank" title="Cartoon Network Site Navigation">Cartoon Network Nav</a></p>
          <img src={carousel} alt="" />
      </div>
    );
  }
}

export default Carousel;
