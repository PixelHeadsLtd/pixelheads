import React, { Component } from 'react';

// images
import Mon from '../../../../images/clients/fullsix/monum/home.jpg';
import Anger from '../../../../images/clients/fullsix/monum/anger.jpg';
import Arc from '../../../../images/clients/fullsix/monum/arc.jpg';
import Chap from '../../../../images/clients/fullsix/monum/chap.jpg';
import Ecran from '../../../../images/clients/fullsix/monum/ecran.jpg';
import Navi from '../../../../images/clients/fullsix/monum/nav.jpg';

class Monum extends Component {
  render() {
    return (
      <div>
          <h2>Monum</h2>
          <h3>About</h3>
          <p>Monum are the National Monuments Center and their task is to promote and preserve the many fantastic Monuments of Paris</p>
          <p>My role was to conceptualise and build their new website and also a collection of Flash-based interactive promotional presentations.</p>
          <ul className="image-wall">
            <li>
              <a href="../../../swf/fullsix/monum/index.htm" target="_blank" title="Monum">View - Requires Flash</a>
              <img className="wauto" src={Mon} alt="" />
            </li>
            <li>
            <a href="../../../swf/fullsix/monum/index.htm" target="_blank" title="Monum">View - Requires Flash</a>
              <img className="wauto" src={Anger} alt="" />
            </li>
            <li>
            <a href="../../../swf/fullsix/monum/index.htm" target="_blank" title="Monum">View - Requires Flash</a>
              <img className="wauto" src={Arc} alt="" />
            </li>
            <li>
            <a href="../../../swf/fullsix/monum/index.htm" target="_blank" title="Monum">View - Requires Flash</a>
              <img className="wauto" src={Chap} alt="" />
            </li>
            <li>
            <a href="../../../swf/fullsix/monum/index.htm" target="_blank" title="Monum">View - Requires Flash</a>
              <img className="wauto" src={Ecran} alt="" />
            </li>
            <li>
              <a href="../../../swf/fullsix/monum/index.htm" target="_blank" title="Monum">View - Requires Flash</a>
              <img className="wauto" src={Navi} alt="" />
            </li>
          </ul>
        </div>
    );
  }
}

export default Monum;
