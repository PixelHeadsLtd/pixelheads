import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';

// images
// import someVar from '../../../../images/clients/whatever.pnd';

// pages
import Intro from './intro';
import Artist from './artist';
import Project from './project';
import AwsUserJourney from './userjourney';
import Axure from './axure';

class AWS extends Component {
  constructor(props){
    super(props);
    this.state = { activeTab: 0 };
  }

  togglePages() {
    if (this.state.activeTab === 0) {
      return (
        <Intro />
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <Artist />
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div>
         <Project  />
        </div>
      )
    }
    else if (this.state.activeTab === 3) {
      return (
        <div>
          <AwsUserJourney />
        </div>
      )
    }
    else if (this.state.activeTab === 4) {
      return (
        <Axure />
      )
    }
  }

  render() {
    return (
      <div>
        <Tabs onChange={(tabId) => this.setState({ activeTab: tabId })}>
          <h3>In This Section</h3>
          <Tab>Artist Page</Tab>
          <Tab>Project Page</Tab>
          <Tab>UX User Journey</Tab>
          <Tab>Axure Prototype</Tab>
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

export default AWS;
