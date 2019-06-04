import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
// add className to page body
import ReactBody from 'react-body';
// sub header
import SubHeader from '../../../header/subheader';

// the client projects
import CTN from './ctn/ctn';

class TB extends Component {
  render() {
    var title = {
      name: "Turner Broadcasting"
    }
    return (
      <Router>
        <ReactBody className="hide" />
        <SubHeader title={title} />
        <nav className="sub-nav">
          <ul>
              <li><NavLink exact to="/projects/tb/ctn/ctn">Cartoon Network</NavLink></li>
          </ul>
        </nav>
        <Route exact path='/projects/tb/ctn/ctn' component={CTN}></Route>
    </Router>
    );
  }
}

export default TB;