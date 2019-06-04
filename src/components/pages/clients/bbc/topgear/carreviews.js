import React, { Component } from 'react';

// images
import reviews from '../../../../../images/clients/bbc/topgear/car-reviews.jpg';

class carReviews extends Component {
  render() {
    return (
      <div>
        <h2>Car Reviews</h2>
        <img src={reviews} alt="" />
      </div>
    );
  }
}

export default carReviews;