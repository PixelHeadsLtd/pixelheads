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
          Setanta Asset Management is an independent investment management firm based in Dublin, Ireland. 
          Established in 1998, Setanta has successfully applied a long-term value investing approach to its global equity and multi-asset funds.
        </p>
        <p>My role was to design and build the new Setanta Website</p>
        <img className="wauto" src={Set} alt="" />
      </div>
    );
  }
}

export default Setanta;
