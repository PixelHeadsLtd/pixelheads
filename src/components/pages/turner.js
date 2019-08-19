import React, { Component } from 'react';
import ReactBody from 'react-body';
import { goToTop } from 'react-scrollable-anchor'

// images
import PixelHeadsLogo from '../../images/pixelheads-logo.svg'
import Batman from '../../images/clients/pages/turner/batman-chars.png'
import ScoobyVan from '../../images/clients/pages/turner/scooby-van.png'
import Carousel from '../../images/clients/pages/turner/carousel.gif'
import CartoonNetwork from '../../images/clients/pages/turner/cn.png'
import AdvTime from '../../images/clients/pages/turner/at.png'
import AdultSwimGames from '../../images/clients/pages/turner/as-games.jpg'
import AdultSwimVideos from '../../images/clients/pages/turner/as-videos.jpg'

class Turner extends Component {
  render() {
    goToTop()
    return (
      <div>
        <ReactBody className="turner projects" />     
        <div className="banner"></div>
        <div className="container-fluid col-xs-12 col-sm-12 col-md-12 col-lg-12">
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
                <h1>Turner Broadcasting</h1>
                <ul>
                    <li>
                        <h3>Client</h3>
                        <p>Turner<br/>Broadcasting</p>
                    </li>
                    <li>
                        <h3>Platform</h3>
                        <p>Desktop & Mobile</p>
                    </li>
                    <li>
                        <h3>Services</h3>
                        <p>UI Design for Web & Mobile<br />
                          Animation & VOD
                        </p>
                    </li>
                    <li>
                        <h3>When</h3>
                        <p>2009 - 2012</p>
                    </li>
                </ul>
            </header>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                    <h2>Overview</h2>
                    <p>
                      Turner Brodcasting are part of the Warner Bros 
                      Group. I was hired as a Senior UX Designer to 
                      design seasonal themes for Cartoon Network, 
                      Adult Swim, Boomerang and also improve the 
                      User Experience of the CNN website.
                    </p>
                    <h2>The Brief</h2>
                    <ul>
                        <li>Design new seasonal themes for Cartoon Network, Adult Swim and Boomerang for Desktop & Mobile.</li>
                        <li>Create vector-based animations for the Turner brands.</li>
                        <li>Design & build Flash-Based online games for Turner brands.</li>
                        <li>Build new features for Turner sites</li>
                    </ul>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                    <img src={Batman} className="batman" alt="batman" />
                </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <img src={Carousel} className="carousel" alt="" />
              </div>
            </div>
            <div className="row bg-yellow scooby fullwidth">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 relative">
                <img src={ScoobyVan} className="scooby-van" alt="" />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 para1">
                  <div>
                    <h4>Cartoon Network: Game Builder</h4>
                    <p>
                      Design the Game Builder UI. Game builder does what it says on the tin. 
                      Allows users (younger audience) to create their own 2d games online 
                      via the Cartoon Netowrk website. This was a Flash-Based interface 
                      which eventually converted to HTML5. Some animation was required 
                      on this project which had to have sign off from the Business, 
                      including Lucus Arts for the Star Wars theme. 
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 para2">
                <p>
                    Probably one of the most fun clients to work for, my favourite piece of work was creating the 
                    new navigation for the site which I thought would be great to include the well known characters 
                    and animate these. Probably one of the most fun clients to work for, my favourite piece of work 
                    was creating the new navigation for the site which I thought would be great to include 
                    the well known characters and animate these...
                    </p>
                </div>
            </div>
            <div className="row fullwidth relative ctn-ntw">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <img src={AdvTime} className="adv-time" alt="" />
                <img src={CartoonNetwork} className="cartoon-network" alt="" />
              </div>
            </div>
            <div className="row fullwidth relative as">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <img src={AdultSwimGames} className="adult-swim-games" alt="" />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <img src={AdultSwimVideos} className="adult-swim-videos" alt="" />
              </div>
            </div>
        </div>
      </div>
    );
  }
} 

export default Turner;
