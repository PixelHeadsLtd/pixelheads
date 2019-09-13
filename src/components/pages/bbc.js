import React, { Component } from 'react';
import ReactBody from 'react-body';
import { goToTop } from 'react-scrollable-anchor'

// images
import YouTube from '../../images/clients/pages/bbc/youtube.png'
import TGGrouped from '../../images/clients/pages/bbc/grouped.png'
import CarNews from '../../images/clients/pages/bbc/car-news.png'
import TVShow from '../../images/clients/pages/bbc/tv-show.png'
import MotionGallery from '../../images/clients/pages/bbc/motion-gallery.png'
import BannerImage from '../../images/clients/pages/bbc/banner.png'

// includes
import ProjectsNav from '../menus/projects-nav'
import ProjectsMenu from '../menus/projects-menu'

class BBC extends Component {
  render() {
    goToTop()
    return (
      <div>
        <ReactBody className="bbc projects" />
        <ProjectsNav />
        <div className="banner bbc-active">
          <ProjectsMenu />
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
                        <p>UX UI Design<br />
                          E-Com, FE Dev & VOD
                        </p>
                    </li>
                    <li>
                        <h3>When</h3>
                        <p>Pre 2013</p>
                    </li>
                </ul>
            </header>
            <img src={BannerImage} alt="" data-aos="fade-in" data-aos-duration="1000" />
        </div>
        <div className="container-fluid col-xs-12 col-sm-12 col-md-12 col-lg-12 bbc-container">
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
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <img src={TVShow} className="w-100" alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <img src={CarNews} className="w-100" alt="" />
                </div>
            </div>
            <div className="row topgear-grouped">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <img src={TGGrouped} className="w-100" alt="" />
                </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h2>Motion Gallery</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">      
                    <p>
                      Design the BBC Motion Gallery e-com website. BBC Motion Gallery sells BBC content VOD
                      to various companies from Advertising Corporations to TV Documentaries. The site sells
                      content that both Royalty and Royalty Free content.
                    </p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <p>
                      My role was to research the User Base, design the UI and site architecture/navigation,
                      search, basket & checkout etc. Just to note. Web trends have changed consuderably since 2008,
                      so the UI here may look a bit dated.
                    </p>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <img src={MotionGallery} className="w-100" alt="" />
              </div>
            </div>
        </div>
      </div>
    );
  }
} 

export default BBC;
