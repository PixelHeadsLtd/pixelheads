import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';

// pages
import Intro from './intro';
import CarChooser from './carchooser';
import CarNews from './carnews';
import CarReviews from './carreviews';
import TvShow from './tvshow';
import YouTube from './youtube';
import Demo from './demo';

class TopGear extends Component {
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
        <CarChooser />
      )
    } else if (this.state.activeTab === 2) {
      return (
        <CarNews />
      )
    } else if (this.state.activeTab === 3) {
      return (
        <CarReviews />
      )
    } else if (this.state.activeTab === 4) {
      return (
        <TvShow />
      )
    } else if (this.state.activeTab === 5) {
      return (
        <YouTube />
      )
    } else if (this.state.activeTab === 6) {
      return (
        <Demo />
      )
    }
  }

  render() {
    return (
      <div>
        <Tabs onChange={(tabId) => this.setState({ activeTab: tabId })}>
          <h3>In This Section</h3>
          <Tab>Car Chooser</Tab>
          <Tab>Car News</Tab>
          <Tab>Car Reviews</Tab>
          <Tab>TV Show</Tab>
          <Tab>Youtube Sponsorship</Tab>
          <Tab>TopGear Demo</Tab>
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

export default TopGear;
