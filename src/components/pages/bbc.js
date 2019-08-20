import React, { Component } from 'react';
import ReactBody from 'react-body';
import { goToTop } from 'react-scrollable-anchor'

// images
import PixelHeadsLogo from '../../images/pixelheads-logo.svg'
import YouTube from '../../images/clients/pages/bbc/youtube.png'

class BBC extends Component {
  render() {
    goToTop()
    return (
      <div>
        <ReactBody className="bbc projects" />     
        <div className="banner"></div>
        <div className="container-fluid col-xs-12 col-sm-12 col-md-12 col-lg-12 bbc-container">
            <header className="main-header">
                <nav className="main-nav">
                  <a href="/#section-home">Home</a>
                  <a href="/#section-about">About</a>
                  <a className="active" href="/#section-projects">Projects</a>
                  <a href="/#section-contact">Contact</a>
                </nav>
                <img src={PixelHeadsLogo} alt="" />
            </header>
            <header className="projects-header">
                <h1>BBC Worldwide</h1>
                <ul>
                    <li>
                        <h3>Client</h3>
                        <p>BBC<br/>Worldwide</p>
                    </li>
                    <li>
                        <h3>Platform</h3>
                        <p>Desktop</p>
                    </li>
                    <li>
                        <h3>Services</h3>
                        <p>UI Design for Desktop<br />
                          E-Com, Interactive Design & VOD
                        </p>
                    </li>
                    <li>
                        <h3>When</h3>
                        <p>2007 - 2009</p>
                    </li>
                </ul>
            </header>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <h2>Overview</h2>
                    <p>
                      I was brought in initially to design the BBC Motion Gallery e-commerce site. However, during my time there 
                      I was also asked to look at the BBC Top Gear website and associated affiliates including YouTube campaigns. 
                    </p>
                    <p>
                      My design can be seen in the examples below. I also did some work for Universal Music who 
                      wanted to sell Rights Managed and Royalty Free music on the Motion Gallery platform. 
                      This piece of work resulted in UMG offering me more contract work later on.
                    </p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <h2>The Brief</h2>
                    <ul>
                        <li>Design new seasonal themes for Cartoon Network, Adult Swim and Boomerang for Desktop & Mobile.</li>
                        <li>Create vector-based animations for the Turner brands.</li>
                        <li>Design & build Flash-Based online games for Turner brands.</li>
                        <li>Build new features for Turner sites</li>
                    </ul>
                </div>
            </div>
            <div className="row youtube">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <ul>
                    <li>
                      <h4>TopGear</h4>
                      <p>
                        Designed the TopGear promotion
                        on Youtube which included various 
                        BBC sponsorships and promotions of
                        the TopGear merchandise
                      </p>
                    </li>
                    <li>
                      <h4>Main Site</h4>
                      <p>
                        Re-skinned the existing BBC TopGear
                        website with a new look & feel,
                        Improved UX, in particular the site
                        architecture/navigation.
                      </p>
                    </li>
                  </ul>
                  <img src={YouTube} alt="" className="w-100" />
                </div>
            </div>
        </div>
      </div>
    );
  }
} 

export default BBC;
