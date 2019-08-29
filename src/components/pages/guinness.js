import React, { Component } from 'react';
import ReactBody from 'react-body';
import { goToTop } from 'react-scrollable-anchor'

// images
import GuinnessHomePage from './../../images/clients/pages/guinness/home.png'

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
                        <p>Pre 2013</p>
                    </li>
                </ul>
            </header>
        </div>
        <div className="container-fluid col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <header className="main-header">
              <ProjectsNav />
            </header>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h2>Overview</h2>
                    <p>Freelance project to Design the new Guinness website UI and participate in various sponsorship promotions. More info to follow shortly.</p>
                </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <img src={GuinnessHomePage} className="w-100" alt="" />
              </div>
            </div>
        </div>
      </div>
    );
  }
} 

export default Guinness;
