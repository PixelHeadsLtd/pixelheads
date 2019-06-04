import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
// add className to page body
import ReactBody from 'react-body';
// sub header
import SubHeader from '../../../header/subheader';

// the client projects
import TopGear from './topgear/topgear';
import MotionGallery from './motiongallery/motiongallery';

class UMG extends Component {
  render() {
    var title = {
      name: "BBC Worldwide"
    }
    return (
      <Router>
        <ReactBody className="hide" />
        <SubHeader title={title} />
        <nav className="sub-nav">
          <ul>
              <li><NavLink exact to="/projects/bbc/topgear/topgear">BBC TopGear</NavLink></li>
              <li><NavLink to="/projects/bbc/motiongallery/motiongallery">BBC Motion Gallery</NavLink></li>
          </ul>
        </nav>
        <Route exact path='/projects/bbc/topgear/topgear' component={TopGear}></Route>
        <Route path='/projects/bbc/motiongallery/motiongallery' component={MotionGallery}></Route>
    </Router>
    );
  }
}

export default UMG;