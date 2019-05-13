import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';

// pages
import Intro from './intro';
import Branding from './branding';
import Mobile from './mobile';
import Website from './website';
import Personas from './personas';
import Story from './story';
import Styleguides from './styleguides';

class LWS extends Component {
  constructor(props){
    super(props);
    this.state = { activeTab: 2 };
  }

  togglePages() {
    if (this.state.activeTab === 0) {
      return (
        <Intro />
      )
    } else if (this.state.activeTab === 1) {
      return (
        <Branding />
      )
    } else if (this.state.activeTab === 2) {
      return (
        <Mobile />
      )
    } else if (this.state.activeTab === 3 ) {
      return (
        <Website />
      )
    } else if (this.state.activeTab === 4) {
      return (
        <Personas />
      )
    } else if (this.state.activeTab === 5) {
      return (
        <Story />
      )
    }
    else if (this.state.activeTab === 6) {
      return (
        <Styleguides />
      )
    }
  }

  render() {
    return (
      <div>
        <Tabs onChange={(tabId) => this.setState({ activeTab: tabId })}>
          <h3>In This Section</h3>
          <Tab>Branding</Tab>
          <Tab>Mobile</Tab>
          <Tab>Website</Tab>
          <Tab>UX: Personas</Tab>
          <Tab>UX: User Story Snippet</Tab>
          <Tab>StyleGuides</Tab>
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

export default LWS;
