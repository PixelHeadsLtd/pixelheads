import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import UMG from '../pages/umg';
import Turner from '../pages/turner';
import BBC from '../pages/bbc';
import Monum from '../pages/monum';
import Setanta from '../pages/setanta';
import Guinness from '../pages/guinness';

class ProjectsMenu extends Component {
  render() {
    return (
      <div>
        <nav className="projects-menu">
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
