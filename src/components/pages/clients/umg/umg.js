import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
// add className to page body
import ReactBody from 'react-body';
// sub header
import SubHeader from '../../../header/subheader';

// the client projects
import LWS from './lws/lws';
import RWS from './rws/rws';
import Rights from './rights/rights';
import AWS from './aws/aws';

class UMG extends Component {
  render() {
    var title = {
      name: "Universal Music"
    }
    return (
      <Router>
        <ReactBody className="hide" />
        <SubHeader title={title} />
        <nav className="sub-nav">
          <ul>
              <li><NavLink exact to="/projects/umg/lws/lws">Label Workspace</NavLink></li>
              <li><NavLink to="/projects/umg/aws/aws">Asset Workspace</NavLink></li>
              <li><NavLink to="/projects/umg/rights/rights">Rights Hub</NavLink></li>
              <li><NavLink to="/projects/umg/rws/rws">Supply Chain</NavLink></li>
          </ul>
        </nav>
        <Route exact path='/projects/umg/lws/lws' component={LWS}></Route>
        <Route path='/projects/umg/aws/aws' component={AWS}></Route>
        <Route path='/projects/umg/rights/rights' component={Rights}></Route>
        <Route path='/projects/umg/rws/rws' component={RWS}></Route>
    </Router>
    );
  }
}

export default UMG;