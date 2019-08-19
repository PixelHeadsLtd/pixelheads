import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// pages
import Home from './components/pages/home';

// Entry point routes to project pages
import UMG from './components/pages/umg';
import Turner from './components/pages/turner';
import BBC from './components/pages/bbc';
import Monum from './components/pages/monum';
import Setanta from './components/pages/setanta';
import Guinness from './components/pages/guinness';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Home}></Route>
          {/* 
          
            Below are the Entry point routes to projects via the projects.js page.
            Although the projects.js file in nested within the home.js page, it
            still requires a new entry point otherwise the projects will load
            within the home.js page which is currently use to display all content
            as a scrolling single page. The below routes are created at root level
            and will display any content that is passed to the path='' url.
          
          */}
          <Route path='/UMG' component={UMG}></Route>
          <Route path='/Turner' component={Turner}></Route>
          <Route path='/BBC' component={BBC}></Route>
          <Route path='/Monum' component={Monum}></Route>
          <Route path='/Setanta' component={Setanta}></Route>
          <Route path='/Guinness' component={Guinness}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
