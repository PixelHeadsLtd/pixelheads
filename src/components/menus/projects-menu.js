import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProjectsMenu extends Component {
  render() {
    return (
      <div>
        <nav className="projects-menu">
`         <h4>Projects</h4>
          <ul>
            <li><Link to="/umg"><i></i>Universal Music</Link></li>
            <li><Link to="/turner"><i></i>Turner</Link></li>
            <li><Link to="/bbc"><i></i>BBC Worldwide</Link></li>
            <li><Link to="/monum"><i></i>Monum</Link></li>
            <li><Link to="/setanta"><i></i>Setanta</Link></li>
            <li><Link to="/guinness"><i></i>Guinness</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
} 

export default ProjectsMenu;
