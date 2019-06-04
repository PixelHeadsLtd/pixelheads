import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';

// pages
// import Intro from './intro';

class MotionGallery extends Component {
  constructor(props){
    super(props);
    this.state = { activeTab: 2 };
  }

  togglePages() {
    if (this.state.activeTab === 0) {
      return (
        <h3>one</h3>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <h3>two</h3>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <h3>three</h3>
      )
    }
  }

  render() {
    return (
      <div>
        <Tabs onChange={(tabId) => this.setState({ activeTab: tabId })}>
          <h3>In This Section</h3>
          <Tab>Branding</Tab>
          <Tab>Something else</Tab>
          <Tab>And Another</Tab>
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
