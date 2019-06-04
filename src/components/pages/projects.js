import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
// sub header
import SubHeader from '../header/subheader';

// clients
import UMG from './clients/umg/umg';
import TNA from './clients/tna/tna';
import TB from './clients/tb/tb';
import BBC from './clients/bbc/bbc';
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
            <h2>PixelHeads</h2>
            <h3>About</h3>
            <p>
              Thanks for visiting PixelHeads. I've put together this small ReactJS portfolio to provide
              prospective clients with examples of my work, both past and present. 
            </p>
            <h3>Skills</h3>
            <p>
              User Research: Understanding business requirements 
              and User groups. Create Personas, Feedback Sessions, Workshops, User Stories and Testing Scenarios. 
              UXD: User Journey Workflows, Wireframes, Sketches and Interactive Prototypes. 
              Design: Brand Development, creation of Styleguides, Logo and Website Design. Implementation: Front-End Development, 
              implementation of final designs, primarily focusing on: HTML5, CSS3, LESS, SASS and including 
              Angular, React and Aurelia JavaScript libraries.
            </p>
            <p>
              <ul>
                <li>UX Visual Design</li>
                <li>UX Research</li>
                <li>UI Design</li>
                <li>Branding</li>
                <li>Styleguides Creation</li>
                <li>Font-End Developer</li>
                <li>Highly skilled CSS, SASS LESS</li>
                <li>Angular, Aurelia and React Redux development</li>
              </ul>
            </p>
            <h3>Clients</h3>
            <p>
              Universal Music, Republic Records, DeafJam, Turner Broadcasting, BBC Worldwide, The Discovery Channel, 
              Guinness, Deezer, Apple music, Mars, Toshiba, Lycos, Virgin, Amazon, Sainsbury’s, 
              SEB Bank, Setanta, Barclays Bank and The National Archives.
            </p>
          </section>
          <Router>
          <div className="hide-sub-header"><SubHeader title={title} /></div>
          <nav className="sub-nav"></nav>
          <Route path='/projects/umg/lws/lws' component={UMG}></Route>
          <Route path='/projects/tna/disc/disc' component={TNA}></Route>
          <Route path='/projects/tb/ctn/ctn' component={TB}></Route>
          <Route path='/projects/bbc/topgear/topgear' component={BBC}></Route>
          <Route path='/projects/fullsix/website' component={Fullsix}></Route>
          <aside>
              <div className="logos">
                <NavLink className="umg" to="/projects/umg/lws/lws" exact></NavLink>
                <NavLink className="tna" to="/projects/tna/disc/disc"></NavLink>
                <NavLink className="tb" to="/projects/tb/ctn/ctn"></NavLink>
                <NavLink className="bbc" to="/projects/bbc/topgear/topgear"></NavLink>
                <NavLink className="fx" to="/projects/fullsix/website"></NavLink>
              </div>
              <div className="shadow"></div>
          </aside>
        </Router>
      </div>
    );
  }
}

export default Projects;
