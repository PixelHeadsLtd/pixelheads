import React, { Component } from 'react';

// images
import carNews from '../../../../../images/clients/bbc/topgear/car-news.jpg';

class CarNews extends Component {
  render() {
    return (
      <div>
        <h2>Car News</h2>
        <img src={carNews} alt="" />
      </div>
    );
  }
}

export default CarNews;