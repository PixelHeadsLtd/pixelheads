import React, { Component } from 'react';
import ReactBody from 'react-body';
import { goToTop } from 'react-scrollable-anchor'

// images

import ProjectsNav from './projects-nav'
import ProjectsMenu from './projects-menu'

class Guinness extends Component {
  render() {
    goToTop()
    return (
      <div>
        <ReactBody className="guinness projects" />     
        <div className="banner guinness-active">
          <ProjectsMenu />
          <header className="projects-header">
                <h1>Guinness</h1>
                <ul>
                    <li>
                        <h3>Client</h3>
                        <p>Guinness</p>
                    </li>
                    <li>
                        <h3>Platform</h3>
                        <p>Desktop</p>
                    </li>
                    <li>
                        <h3>Services</h3>
                        <p>UX UI Design<br />
                          Conceptualisation
                        </p>
                    </li>
                    <li>
                        <h3>When</h3>
                        <p>Pre 2009</p>
                    </li>
                </ul>
            </header>
        </div>
        <div className="container-fluid col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <header className="main-header">
              <ProjectsNav />
            </header>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <h2>Overview</h2>
                    <p>
                      Sorry, this page is currently in Development and will be available soon.
                    </p>
                </div>
            </div>
        </div>
      </div>
    );
  }
} 

export default Guinness;
