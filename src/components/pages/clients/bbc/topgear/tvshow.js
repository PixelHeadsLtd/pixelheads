import React, { Component } from 'react';

// images
import tvShow from '../../../../../images/clients/bbc/topgear/tv-show.jpg';

class TVShow extends Component {
  render() {
    return (
      <div>
        <h2>TV Show</h2>
        <img src={tvShow} alt="" />
      </div>
    );
  }
}

export default TVShow;