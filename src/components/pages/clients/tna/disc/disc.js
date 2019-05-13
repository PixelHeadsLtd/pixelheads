import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';

// pages
//import Intro from './intro';

// images
import discoveryWebsite from '../../../../../images/clients/tna/home.png';
import megaMenu from '../../../../../images/clients/tna/mega-menu.png';

class TDC extends Component {
  constructor(props){
    super(props);
    this.state = { activeTab: 0 };
  }

  togglePages() {
    if (this.state.activeTab === 0) {
      return (
        <div>
            <img className="mw1000" src={discoveryWebsite} alt="" />
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div>
            <img className="mw1000" src={megaMenu} alt="" />
        </div>
      )
    } 
  }

  render() {
    return (
      <div>
        <Tabs onChange={(tabId) => this.setState({ activeTab: tabId })}>
          <h3>In This Section</h3>
          <Tab>Navigation</Tab>
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

export default TDC;
