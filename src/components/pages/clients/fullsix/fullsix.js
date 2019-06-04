import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
// add className to page body
import ReactBody from 'react-body';
// sub header
import SubHeader from '../../../header/subheader';

// the client projects
import Home from './website';

class Fullsix extends Component {
  render() {
    var title = {
      name: "Fullsix"
    }
    return (
      <Router>
        <ReactBody className="hide" />
        <SubHeader title={title} />
        <nav className="sub-nav">
          <ul>
              <li><NavLink exact to="/projects/fullsix/website">Fullsix Clients</NavLink></li>
          </ul>
        </nav>
        <Route exact path='/projects/fullsix/website' component={Home}></Route>
        
    </Router>
    );
  }
}

export default Fullsix;