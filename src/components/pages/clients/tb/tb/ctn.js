import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';

// pages
//import Intro from './intro';

// images
import carousel from '../../../../../images/clients/tb/cn/carousel.gif';
import home from '../../../../../images/clients/tb/cn/home.jpg';

class CartoonNetwork extends Component {
  constructor(props){
    super(props);
    this.state = { activeTab: 0 };
  }

  togglePages() {
    if (this.state.activeTab === 0) {
      return (
        <div>
            <h2>Turner Broadcasting - Part of Warner Bros</h2>
            <h3>Overview</h3>
            <p>As Senior UX Designer and Front-End Developer working within a Drupel Framework, my responsibility was to theme 4 main sites. 
              These were Cartoon Network, Adult Swim, Boomerang and CNN. My role included UX Design, Animation (Flash and ActionScript) and
              Front-End development.</p>
            <img src={home} alt="" />
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div>
            <h2>Site Navigation Carousel</h2>
            <p>View the Carousel here <a href="../../../Carousel/carousel.htm" target="_blank" title="Cartoon Network Site Navigation">Cartoon Network Nav</a></p>
            <img src={carousel} alt="" />
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div>
            <h2>Website</h2>
            <p>The main CNN site went through regular seasonal theme changes and had to work 
              in ie6 acroos all languages including Arabic which was a bit of a chalenge.</p>
            <img src={home} alt="" />
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
          <Tab>Website</Tab>
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

export default CartoonNetwork;
