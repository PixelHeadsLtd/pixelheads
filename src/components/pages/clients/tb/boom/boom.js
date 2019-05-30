import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';

// pages
//import Intro from './intro';

// images
import boom from '../../../../../images/clients/tb/bm/home.jpg';

class Boomerang extends Component {
  constructor(props){
    super(props);
    this.state = { activeTab: 0 };
  }

  togglePages() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <h2>Loaded One</h2>
          <img src={boom} alt="" />
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h2>Second</h2>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h2>Third</h2>
        </div>
      )
    } 
  }

  render() {
    return (
      <div>
        <Tabs onChange={(tabId) => this.setState({ activeTab: tabId })}>
          <h3>In This Section</h3>
          <Tab>Second</Tab>
          <Tab>Third</Tab>
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

export default Boomerang;
