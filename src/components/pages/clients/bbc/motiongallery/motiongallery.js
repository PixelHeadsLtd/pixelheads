import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';

// images
import Home from '../../../../../images/clients/bbc/tmg/home.jpg';
import Editorial from '../../../../../images/clients/bbc/tmg/editorial.jpg';
import Mixed from '../../../../../images/clients/bbc/tmg/mixed.jpg';
import RoyaltyFree from '../../../../../images/clients/bbc/tmg/royalty-free.jpg';
import Search from '../../../../../images/clients/bbc/tmg/search-results.jpg';
import UMGFull from '../../../../../images/clients/bbc/umg/tmg-full.png';
import UMG from '../../../../../images/clients/bbc/umg/tmg.jpg';

// pages
// import Intro from './intro';

class MotionGallery extends Component {
  constructor(props){
    super(props);
    this.state = { activeTab: 0 };
  }

  togglePages() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <h2>BBC Motion Gallery</h2>
          <h3>About</h3>
          <p>BBC Motion Gallery is an ecommerce website created for the purpose of selling BBC Video content royalties out to market. 
            Much of the content ends up being used in films and advertising. My role was to re-design the main website and build the front-end.
          </p>
          <img src={Home} alt="" />
          <img src={Editorial} alt="" />
          <img src={Mixed} alt="" />
          <img src={RoyaltyFree} alt="" />
          <img src={Search} alt="" />
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h2>Universal Music on BBC Motion Gallery</h2>
          <h3>About</h3>
          <p>My role was to design and build the UMG microsite with BBC Motion Gallery to allow users to search and buy Rights Managed and Royal Free music.</p>
          <img className="wauto clear" src={UMGFull} alt="" />
          <img className="wauto clear margin-left-small margin-bottom-large" src={UMG} alt="" />
        </div>
      )
    } 
  }

  render() {
    return (
      <div>
        <Tabs onChange={(tabId) => this.setState({ activeTab: tabId })}>
          <h3>In This Section</h3>
          <Tab>Universal Music on BBC</Tab>
        </Tabs>
        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content">{this.togglePages()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default MotionGallery;
