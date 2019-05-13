import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// add className to page body
import ReactBody from 'react-body';
import Projects from './projects';

class Home extends Component {
  render() {
    return (
      <div className='container-fluid'>
      <ReactBody className="home-page" />
        <Link to="/projects" className="welcome" component={Projects}>
          <h3>PixelHeads Ltd</h3>
          <p>Welcome to PixelHeads Ltd. Please take a look at some example of our work.</p>
        </Link>
        <footer></footer>
      </div>
    );
  }
}

export default Home;
