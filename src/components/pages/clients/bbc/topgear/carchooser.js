import React, { Component } from 'react';

// images
import carChooser from '../../../../../images/clients/bbc/topgear/car-chooser.jpg';

class CarChooser extends Component {
  render() {
    return (
      <div>
        <h2>Car Chooser</h2>
        <img src={carChooser} alt="" />
      </div>
    );
  }
}

export default CarChooser;