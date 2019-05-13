import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
// add className to page body
import ReactBody from 'react-body';
// sub header
import SubHeader from '../../../header/subheader';

// the client projects
import CTN from './tb/ctn';
import BOOM from './tb/boom';
import AS from './tb/as';
import CNN from './tb/cnn';

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
              <li><NavLink exact to="/projects/tb/tb/ctn">Cartoon Network</NavLink></li>
              <li><NavLink exact to="/projects/tb/tb/boom">Boomerang</NavLink></li>
              <li><NavLink exact to="/projects/tb/tb/as">Adult Swim</NavLink></li>
              <li><NavLink exact to="/projects/tb/tb/cnn">CNN</NavLink></li>
          </ul>
        </nav>
        <Route exact path='/projects/tb/tb/ctn' component={CTN}></Route>
        <Route exact path='/projects/tb/tb/boom' component={BOOM}></Route>
        <Route exact path='/projects/tb/tb/as' component={AS}></Route>
        <Route exact path='/projects/tb/tb/cnn' component={CNN}></Route>
    </Router>
    );
  }
}

export default TB;