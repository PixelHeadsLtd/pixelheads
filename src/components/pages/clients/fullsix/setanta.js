import React, { Component } from 'react';

// images
import Set from '../../../../images/clients/fullsix/setanta/setanta.jpg';

class Setanta extends Component {
  render() {
    return (
      <div>
        <h2>Setanta</h2>
        <h3>About</h3>
        <p>
          Setanta Sports was a sports television company based in Dublin, Ireland. 
          The company was formed in 1990 to facilitate the broadcasting of Irish 
          sporting events to international audiences. The company operated channels 
          in the UK, Asia, Australia, the United States and Canada
        </p>
        <p>My role was to design and build the new Setanta Website</p>
        <img className="wauto" src={Set} alt="" />
      </div>
    );
  }
}

export default Setanta;
