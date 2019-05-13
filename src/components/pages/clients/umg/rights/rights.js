import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';

// pages
import Website from './website';
import Branding from './branding';

// images
import rightsSearch from '../../../../../images/clients/umg/rights/search.png';

class Rights extends Component {
  constructor(props){
    super(props);
    this.state = { 
      activeTab: 0,
    };
  }

  togglePages() {
    if (this.state.activeTab === 0) {
      return (
        <Website />
      )
    } else if (this.state.activeTab === 1) {
      return (
        <Branding />
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h2>Search</h2>
          <img src={rightsSearch} alt="" />
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <Tabs onChange={(tabId) => this.setState({ activeTab: tabId })}>
          <h3>In This Section</h3>
          <Tab>Branding</Tab>
          <Tab>Search</Tab>
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

export default Rights;
