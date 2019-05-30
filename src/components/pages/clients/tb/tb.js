import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
// add className to page body
import ReactBody from 'react-body';
// sub header
import SubHeader from '../../../header/subheader';

// the client projects
import CTN from './ctn/ctn';
import BOOM from './boom/boom';
import AS from './as/as';
import CNN from './cnn/cnn';

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
              <li><NavLink exact to="/projects/tb/boom/boom">Boomerang</NavLink></li>
              <li><NavLink exact to="/projects/tb/as/as">Adult Swim</NavLink></li>
              <li><NavLink exact to="/projects/tb/cnn/cnn">CNN</NavLink></li>
          </ul>
        </nav>
        <Route exact path='/projects/tb/ctn/ctn' component={CTN}></Route>
        <Route exact path='/projects/tb/boom/boom' component={BOOM}></Route>
        <Route exact path='/projects/tb/as/as' component={AS}></Route>
        <Route exact path='/projects/tb/cnn/cnn' component={CNN}></Route>
    </Router>
    );
  }
}

export default TB;