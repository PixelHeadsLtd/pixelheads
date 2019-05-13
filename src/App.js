import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// COMPONENTS
// global
import Header from './components/header/header';
import Footer from './components/footer/footer';
// pages
import Home from './components/pages/home';
import Projects from './components/pages/projects';
import Contact from './components/pages/contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/projects' component={Projects}></Route>
          <Route exact path='/contact' component={Contact}></Route>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
