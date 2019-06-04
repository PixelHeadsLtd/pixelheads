import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';

// pages
import Intro from './intro';
import Monum from './monum';
import Setanta from './setanta';

class Website extends Component {
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
        <Monum />
      )
    } else if (this.state.activeTab === 2) {
      return (
        <Setanta />
      )
    } 
  } 

  render() {
    return (
      <div>
        <Tabs onChange={(tabId) => this.setState({ activeTab: tabId })}>
          <h3>In This Section</h3>
          <Tab>Monum</Tab>
          <Tab>Setanta</Tab>
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

export default Website;
