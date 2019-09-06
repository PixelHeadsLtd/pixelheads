import React, { Component } from 'react';
import ReactBody from 'react-body';
import { goToTop } from 'react-scrollable-anchor'

// images
import StuHubLogo from '../../images/clients/pages/umg/studiohub-logo.png'
import Personas from '../../images/clients/pages/umg/personas.png'
import Mobile from '../../images/clients/pages/umg/mobile.png'
import StudioHub from '../../images/clients/pages/umg/studiohub.png'
import AWS from '../../images/clients/pages/umg/aws.png'
import RightsHubLogo from '../../images/clients/pages/umg/rightshub-logo.png'
import RightsHub from '../../images/clients/pages/umg/rightshub.png'
import SupplyChainLogo from '../../images/clients/pages/umg/supplychain-logo.png'
import SupplyChain from '../../images/clients/pages/umg/supplychain.png'

// includes
import ProjectsNav from '../menus/projects-nav'
import ProjectsMenu from '../menus/projects-menu'

class UMG extends Component {
  render() {
   goToTop()
    return (
      <div>
        <ReactBody className="umg projects" />
        <ProjectsNav />
        <div className="banner umg-active">
            <ProjectsMenu />
            <nav className="downloads-menu">
                <ul>
                    <li>
                        <a href="./../umg/AWS-Example-User-Journey.pdf" download="AWS User Journey" title="Will Download a PDF">Example User Journey</a>
                    </li>
                    <li>
                        <a href="./../axure-demo/index.html" title="Will open in a New Window" target="_blank">Axure Prototype</a>
                    </li>
                    <li>
                        <a href="./../StudioHubStyleGuides/index.htm" title="Will open in a New Window" target="_blank">StyleGuides</a>
                    </li>
                </ul>
            </nav>
            <header className="projects-header">
                <h1>Universal Music</h1>
                <ul className="umg-overview">
                    <li>
                        <h3>Client</h3>
                        <p>Universal Music</p>
                    </li>
                    <li>
                        <h3>Platform</h3>
                        <p>Desktop & Mobile</p>
                    </li>
                    <li>
                        <h3>Services</h3>
                        <p>Contract UX Research,<br />UI & Brand Design</p>
                    </li>
                    <li>
                        <h3>When</h3>
                        <p>2013 - 2019</p>
                    </li>
                </ul>
            </header>
        </div>
        <div className="container-fluid col-xs-12 col-sm-12 col-md-12 col-lg-12 umg-mobile">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                    <h2>Overview</h2>
                    <p>
                        During 2013, EMI joined Universal Music to develop a Global Platform of applications that would help Record Label’s to be more responsible 
                        for the market readyness of their products. The project was headed up by the then CEO of IT. During early stages, there was a handfull of key
                        people. A Project Manager, two Business Analysts, a small Test Team and two Back-End Devs. 
                    </p>
                    <h2>The Brief</h2>
                    <ul>
                        <li>Undertake initial research using a UXD approach.</li>
                        <li>Carry out data analytics using qualatative and quantative research techniques.</li>
                        <li>Organise Label meetings and Design Workshops.</li>
                        <li>Develop an understanding of the complex processes that are involved in Music Delivery.</li>
                        <li>Write Personas and User Stories.</li>
                        <li>Create User Journey workflows & site Architecture models.</li>
                        <li>Create low-level, medium level and high level Mock-Ups.</li>
                        <li>Create working static & Interactive Prototypes.</li>
                        <li>Design the UI and Brand identity for the entire platform.</li>
                        <li>Carry out Front-End dveleopment using React, Angular and Aurelia frameworks.</li>
                    </ul>
                    <p>
                        Applications where as follows:
                    </p>
                    <p>
                        <label>STUDIO HUB</label>
                        Allow Record Labels to create create, search, manage projects (Albums), recording sessions, add contributors, 
                        manage songs, create and manage recording commitments, create and manage recording deals, add lyrics and 
                        legal documentation, set and manage artist agreement deliverables and so on...
                    </p>
                    <p>
                        <label>ASSET WORKSPACE</label>
                        Allow sound engineers and preservationists to catalogue all digital and physical sound recordings. Ability to 
                        upload large files and sample recordings. To manage meta-data and Label data.
                    </p>
                    <p>
                        <label>RIGHTS HUB</label>
                        Allow Labels and partners to create and manage record deals and rights across global territories.
                    </p>
                    <p>
                        <label>SUPPLY CHAIN</label>
                        Design the Supply Chain App. RWS allows the release of assets out to market within the digital realms for platforms 
                        such as Amazon Prime, Apple Music and Spotify generating millions of dollars for the music industry. 
                        This project is a key part of the business and allows staggered release rights across a complex worldwide timeline.   
                    </p> 
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 shift-up">
                    <img className="personas to-the-right-edge" src={Personas} alt="" />
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                    <img src={Mobile} className="w-100" alt="" />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 red-panel">
                    <h4>STAGE ONE</h4>
                    <p>
                        Research the User needs inline with the Business incentives. Create Personas, User Stories, low-level 
                        Mock-ups and User Jouney's. Set up design workshops and schedule regular meetings with the BA’s and 
                        business owners to thrash out ideas.
                    </p>
                    <h4>STAGE TWO</h4>
                    <p>
                        Based on findings. Create med-level wireframes and prototypes for both mobile & desktop. Sketch out site 
                        architecture, navigation and content.  Arrange feedback sessions and promote a collaborative environment 
                        with myself, users (Labels) and the Business.
                    </p>
                    <h4>STAGE THREE</h4>
                    <p>
                        Design the Platform Brand and mobile-first UI. Create high-level interactive prototypes using Axure & Sketch. Create 
                        polished visuals in both Sketch and CS6 that present the final look and feel.
                    </p>
                    <h4>STAGE FOUR</h4>
                    <p>              
                        Build Front-End. Bootstrap, ReactJS, Angular, SASS, LESS and HTML5.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h2>StudioHub</h2>
                    <img src={StuHubLogo} className="w-100" alt="" />
                    <img src={StudioHub} className="w-100" alt="" />
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h2>Assets Workspace</h2>
                    <img src={AWS} className="w-100" alt="" />
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h2>Rights Hub</h2>
                    <img src={RightsHubLogo} className="w-100" alt="" />
                    <img src={RightsHub} className="w-100" alt="" />
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h2>Supply Chain</h2>
                    <img src={SupplyChainLogo} className="w-100" alt="" />
                    <img src={SupplyChain} className="w-100" alt="" />
                </div>
            </div>
        </div>
      </div>
    );
  }
} 

export default UMG;
