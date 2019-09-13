import React, { Component } from 'react';
import ReactBody from 'react-body';
import { goToTop } from 'react-scrollable-anchor'

// images
import OriginalSite from '../../images/clients/pages/monum/original-home.jpg'
import Arc from '../../images/clients/pages/monum/arc.jpg'
import Chap from '../../images/clients/pages/monum/chap.jpg'
import Angers from '../../images/clients/pages/monum/anger.jpg'
import MonumHome from '../../images/clients/pages/monum/home.png'
import MonumHomeTwo from '../../images/clients/pages/monum/monum-fullpage.png'
import BannerImage from '../../images/clients/pages/monum/banner.png'

// includes
import ProjectsNav from '../menus/projects-nav'
import ProjectsMenu from '../menus/projects-menu'

class Monum extends Component {
  render() {
    goToTop()
    return (
      <div>
        <ReactBody className="monum projects" />
        <ProjectsNav />
        <div className="banner monum-active">
          <ProjectsMenu />
          <header className="projects-header">
                <h1>Monum</h1>
                <ul>
                    <li>
                        <h3>Client</h3>
                        <p>Monum</p>
                    </li>
                    <li>
                        <h3>Platform</h3>
                        <p>Desktop</p>
                    </li>
                    <li>
                        <h3>Services</h3>
                        <p>UX UI Design<br />
                          Conceptualisation
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
        <div className="container-fluid col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="row">
               <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h2>Overview</h2>
               </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <p>
                      Whilst working agency-side, I conceptualised and designed sites for many clients, Guinness, Mars, Coke, Ribena, Setanta, 
                      Barclays to name just a few.  One of my favourite pieces of work was the website I designed for The Center Des Monuments Nationaux. 
                    </p>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <p>
                      Monum was and still is a public institution under the supervision of the Ministry of Culture, created in 1914. 
                      My Origonal concept was to utilise the vast archive of fantastic architectural images that
                    </p>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <p>
                      The Center Des Monuments provided us with. I wanted to take advantage of this and thought it would be good to use these to form part of the
                      site navigation. 
                    </p>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <p>
                    You can view the orginal Flash versions below <a href="https://www.adobe.com/uk/search.html#q=flash%20player&sort=relevancy&start=1" target="blank">(Requires Flash)</a>.
                      Further down the page you will find the latest version of the site which I designed in 2017 on a freelance basis.
                    </p>
                </div>
            </div>
            <div className="row margin-bottom-med">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <figure className="bbc-is-active">
                  <a href="./swf/fullsix/monum/index.html" target="blank">
                    <h3>View Flash Version</h3>
                    <p>
                      #Conceptualisation<br />
                      #Graphic Design<br />
                      #FE Development
                    </p>
                  </a>
                  <div className="tint"></div>
                  <img src={OriginalSite} className="w-100" alt="" />
                </figure>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <figure className="bbc-is-active">
                  <a href="./swf/fullsix/monum/resources/arc.htm" target="blank">
                    <h3>View Flash Version</h3>
                    <p>
                      #Conceptualisation<br />
                      #Graphic Design<br />
                      #FE Development
                    </p>
                  </a>
                  <div className="tint"></div>
                  <img src={Arc} className="w-100" alt="" />
                </figure>
              </div>
            </div>
            <div className="row margin-bottom-med">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <figure className="bbc-is-active">
                  <a href="./swf/fullsix/monum/resources/chap.htm" target="blank">
                    <h3>View Flash Version</h3>
                    <p>
                      #Conceptualisation<br />
                      #Graphic Design<br />
                      #FE Development
                    </p>
                  </a>
                  <div className="tint"></div>
                  <img src={Chap} className="w-100" alt="" />
                </figure>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <figure className="bbc-is-active">
                  <a href="./swf/fullsix/monum/resources/anger.htm" target="blank">
                    <h3>View Flash Version</h3>
                    <p>
                      #Conceptualisation<br />
                      #Graphic Design<br />
                      #FE Development
                    </p>
                  </a>
                  <div className="tint"></div>
                  <img src={Angers} className="w-100" alt="" />
                </figure>
              </div>
            </div>
            <div className="row margin-bottom-med">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <img src={MonumHome} className="w-100" alt="" />
              </div>
            </div>
            <div className="row margin-bottom-med">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <img src={MonumHomeTwo} className="w-100" alt="" />
              </div>
            </div>
        </div>
      </div>
    );
  }
} 

export default Monum;
