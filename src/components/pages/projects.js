import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// images
import UMGThumb from '../../images/clients/thumbs/umg.png'
import TurnerThumb from '../../images/clients/thumbs/turner.png'
import BBCThumb from '../../images/clients/thumbs/bbc.png'
import MonumThumb from '../../images/clients/thumbs/monum.png'
import SetantaThumb from '../../images/clients/thumbs/setanta.png'
import GuinnessThumb from '../../images/clients/thumbs/guinness.png'

class Projects extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Projects</h1>
        <header className="projects-header">
          <nav className="main-nav">
            <Link className="umg" to="/umg">Universal Music</Link>
            <Link className="turner" to="/turner">Turner</Link>
            <Link className="bbc" to="/bbc">BBC Worldwide</Link>
            <Link className="monum" to="/monum">Monum</Link>
            <Link className="setanta" to="/setanta">Setanta</Link>
            <Link className="guinness" to="/guinness">Guinness</Link><br/>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <figure className="umg-is-active">
                  <Link to="/umg">
                    <h3>Universal Music</h3>
                    <p>
                      #UX Research #Web & Mobile Design<br />
                      #Brand Design #Styleguides<br />
                      #FE Development
                    </p>
                  </Link>
                  <div className="tint"></div>
                  <img src={UMGThumb} alt="" />
                </figure>
                <figure className="turner-is-active">
                  <Link to="/turner">
                    <h3>Turner Broadcasting</h3>
                    <p>
                      #UX Research #Web & Mobile Design<br />
                      #Drupal Theming #Animation<br />
                      #FE Development
                    </p>
                  </Link>
                  <div className="tint"></div>
                  <img src={TurnerThumb} alt="" />
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <figure className="bbc-is-active">
                  <Link to="/bbc">
                    <h3>BBC Worldwide</h3>
                    <p>
                      #UX Research #Web Design #E-Com<br />
                      #Brand Design #Styleguides<br />
                      #FE Development
                    </p>
                  </Link>
                  <div className="tint"></div>
                  <img src={BBCThumb} className="tall" alt="" />
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <figure className="monum-is-active">
                  <Link to="/monum">
                    <h3>Monum</h3>
                    <p>
                      #Web & Interactive Design<br />
                      #Brand Design #Conceptualisation<br />
                      #FE Development
                    </p>
                  </Link>
                  <div className="tint"></div>
                  <img src={MonumThumb} alt="" />
                </figure>
                <figure className="setanta-is-active">
                  <Link to="/setanta">
                    <h3>Setanta</h3>
                    <p>
                      #Web & Interactive Design<br />
                      #Brand Design #Conceptualisation<br />
                      #FE Development
                    </p>
                  </Link>
                  <div className="tint"></div>
                  <img src={SetantaThumb} alt="" />
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <figure className="guinness-is-active">
                  <Link to="/guinness">
                    <h3>Guinness</h3>
                    <p>
                      #Web & Interactive Design<br />
                      #Brand Design #Conceptualisation<br />
                      #FE Development #Animation
                    </p>
                  </Link>
                  <div className="tint"></div>
                  <img src={GuinnessThumb} alt="" />
                </figure>
              </div>
          </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Projects;
