import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import UMG from './umg';
import Turner from './turner';
import BBC from './bbc';
import Monum from './monum';
import Setanta from './setanta';
import Guinness from './guinness';

class ProjectsMenu extends Component {
  render() {
    return (
      <div>
        <nav>
`         <h4>Projects</h4>
          <ul>
            <li><Link to="/umg" component={UMG}><i></i>Universal Music</Link></li>
            <li><Link to="/turner" component={Turner}><i></i>Turner</Link></li>
            <li><Link to="/bbc" component={BBC}><i></i>BBC Worldwide</Link></li>
            <li><Link to="/monum" component={Monum}><i></i>Monum</Link></li>
            <li><Link to="/setanta" component={Setanta}><i></i>Setanta</Link></li>
            <li><Link to="/guinness" component={Guinness}><i></i>Guinness</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
} 

export default ProjectsMenu;
