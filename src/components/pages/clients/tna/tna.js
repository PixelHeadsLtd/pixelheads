import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
// add className to page body
import ReactBody from 'react-body';
// sub header
import SubHeader from '../../../header/subheader';

// the client projects
import Disc from './disc/disc';

class TNA extends Component {
  render() {
    var title = {
      name: "The National Archives"
    }
    return (
      <Router>
        <ReactBody className="hide" />
        <SubHeader title={title} />
        <nav className="sub-nav">
          <ul>
              <li><NavLink exact to="/projects/tna/disc/disc">Discovery</NavLink></li>
          </ul>
        </nav>
        <Route exact path='/projects/tna/disc/disc' component={Disc}></Route>
    </Router>
    );
  }
}

export default TNA;