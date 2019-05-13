import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';

// pages
import Website from './website';
import Timeline from './timeline';
import PreRelease from './prerelease';
import Branding from './branding';

// images
// import someVar from '../../../../images/clients/whatever.pnd';

class RWS extends Component {
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
        <Timeline />
      )
    } else if (this.state.activeTab === 2) {
      return (
       <PreRelease />
      )
    }
    else if (this.state.activeTab === 3) {
      return (
        <Branding />
      )
    }
  }

  render() {
    return (
      <div>
        <Tabs onChange={(tabId) => this.setState({ activeTab: tabId })}>
          <h3>In This Section</h3>
          <Tab>Timeline</Tab>
          <Tab>Pre-Release</Tab>
          <Tab>Branding</Tab>
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

export default RWS;
