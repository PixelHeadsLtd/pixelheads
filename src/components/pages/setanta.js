import React, { Component } from 'react';
import ReactBody from 'react-body';
import { goToTop } from 'react-scrollable-anchor'

// images
import SetantaHome from './../../images/clients/pages/setanta/home.png'
import SetantaIncome from './../../images/clients/pages/setanta/income.png'
import SetantaNews from './../../images/clients/pages/setanta/news.png'

// includes
import ProjectsNav from '../menus/projects-nav'
import ProjectsMenu from '../menus/projects-menu'

class Setanta extends Component {
  render() {
    goToTop()
    return (
      <div>
        <ReactBody className="setanta projects" />
        <ProjectsNav />
        <div className="banner setanta-active">
          <ProjectsMenu />
          <header className="projects-header">
                <h1>Setanta</h1>
                <ul>
                    <li>
                        <h3>Client</h3>
                        <p>Setanta</p>
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
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <h2>Overview</h2>
                    <p>Setanta Asset Management is an independent investment management firm based<br/>
                      in Dublin, Ireland. Established in 1998, Setanta has successfully applied a <br/>
                      long-term value investing approach to its global equity and multi-asset funds</p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <h2>The Brief</h2>
                    <ul>
                        <li>Create low-level, medium level and high level Mock-Ups.</li>
                        <li>Design the overall site look and feel.</li>
                        <li>Create working static & Interactive Prototypes.</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <img src={SetantaHome} className="w-100" alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <img src={SetantaIncome} className="w-100"  alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <img src={SetantaNews} className="w-100"  alt="" />
                </div>
            </div>
        </div>
      </div>
    );
  }
} 

export default Setanta;
