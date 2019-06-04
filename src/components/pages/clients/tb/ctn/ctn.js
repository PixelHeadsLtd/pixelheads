import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';

// pages
import Intro from './intro';
import Carousel from './carousel';
import CartoonNetwork from './cartoonnetwork';
import AdultSwim from './adultswim';
import Boomerang from './boomerang';
import CNN from './cnn';

class CTN extends Component {
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
       <Carousel />
      )
    } else if (this.state.activeTab === 2) {
      return (
        <CartoonNetwork />
      )
    }
    else if (this.state.activeTab === 3) {
      return (
        <AdultSwim />
      )
    }
    else if (this.state.activeTab === 4) {
      return (
        <Boomerang />
      )
    }
    else if (this.state.activeTab === 5) {
      return (
        <CNN />
      )
    }
  }

  render() {
    return (
      <div>
        <Tabs onChange={(tabId) => this.setState({ activeTab: tabId })}>
          <h3>In This Section</h3>
          <Tab>Navigation</Tab>
          <Tab>Cartoon Network</Tab>
          <Tab>Adult Swim</Tab>
          <Tab>Boomerang</Tab>
          <Tab>CNN</Tab>
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

export default CTN;
