import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
// sub header
import SubHeader from '../header/subheader';

// clients
import UMG from './clients/umg/umg';
import TNA from './clients/tna/tna';
import TB from './clients/tb/tb';
import TDC from './clients/tdc/tdc';
import umgOld from './clients/umgOld/umgOld';
import BBC from './clients/bbc/bbc';
import Pfizer from './clients/pfizer/pfizer';
import Fullsix from './clients/fullsix/fullsix';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
        show: false
    }
    this.toggleActiveClass = this.toggleActiveClass.bind(this);
  } 

  toggleActiveClass() {
    this.setState((prev) => {
        return {
            show: !prev.show
        }
    })
  }
  render() {
    var title = {
      name: "Projects"
    }
    return (
        <div className={"projects " + (this.state.show ? 'hide-menu' : '')}>
          <Link className="toggle animate" onClick={this.toggleActiveClass}></Link>
          <div className="menu-info">
            <p>Please use the left menu to browse my project work.</p>
            <p>Clients are ordered chronologically from top to bottom.</p>
          </div>
          <section className="projects-intro">
            <h1>PixelHeads</h1>
            <p>
              Thanks for visiting PixelHeads. I've put together this small ReactJS portfolio to provide
              prospective clients with examples of my work, both past and present. 
            </p>
            <p>
              I would describe myself as a fully seasoned Senior UX Consultant and Front-End Web Developer 
              for desktop and mobile. 
            </p>
            <p>
              Specialist areas: User Research: Understanding business requirements 
              and User groups. Create Personas, Feedback Sessions, Workshops, User Stories and Testing Scenarios. 
              UXD: User Journey Workflows, Wireframes, Sketches and Interactive Prototypes. 
              Design: Brand Development, Logo and Website Design. Implementation: Front-End Development, 
              implementation of final designs, primarily focusing on: HTML5, CSS3, LESS, SASS and including 
              Angular, React and Aurelia JavaScript libraries.
            </p>
            <h3>Clients</h3>
            <p>
              Universal Music, Turner Broadcasting, BBC Worldwide, The Discovery Channel, Guinness, 
              Mars, Toshiba, Lycos, Virgin, Amazon, Sainsbury’s, SEB Bank, Barclays Bank and The National Archives.
            </p>
            <h3>Skills</h3>
            <ul>
              <li>UX Visual Design</li>
              <li>UX Research</li>
              <li>UI Design</li>
              <li>Branding</li>
              <li>Font-End Developer</li>
              <li>Highly skilled CSS, SASS LESS</li>
              <li>JavaScript and modern frameworks</li>
            </ul>
          </section>
          <Router>
          <div className="hide-sub-header"><SubHeader title={title} /></div>
          <nav className="sub-nav"></nav>
          <Route path='/projects/umg/lws/lws' component={UMG}></Route>
          <Route path='/projects/tna/disc/disc' component={TNA}></Route>
          <Route path='/projects/tb/tb/ctn' component={TB}></Route>
          <Route path='/projects/tdc/tdc' component={TDC}></Route> 
          <Route path='/projects/umgOld/umgOld' component={umgOld}></Route>
          <Route path='/projects/bbc/bbc' component={BBC}></Route>
          <Route path='/projects/pfizer/pfizer' component={Pfizer}></Route>
          <Route path='/projects/fullsix/fullsix' component={Fullsix}></Route>
          <aside>
              <div className="logos">
                <NavLink to="/projects/umg/lws/lws"></NavLink>
                <NavLink to="/projects/tna/disc/disc"></NavLink>
                <NavLink to="/projects/tb/tb/ctn"></NavLink>
                <NavLink to="/projects/tdc/tdc"></NavLink>
                <NavLink to="/projects/umgOld/umgOld"></NavLink>
                <NavLink to="/projects/bbc/bbc"></NavLink>
                <NavLink to="/projects/pfizer/pfizer"></NavLink>
                <NavLink to="/projects/fullsix/fullsix"></NavLink>
              </div>
              <div className="shadow"></div>
          </aside>
        </Router>
      </div>
    );
  }
}

export default Projects;
