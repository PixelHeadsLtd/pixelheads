import React, { Component } from 'react';
import ReactBody from 'react-body';
import { StickyContainer } from 'react-sticky';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';

// Notes for ScrollAnimation
// offset - default 150
// duration - default 1
// initiallyVisible - default false
// delay - default 0
// animateOnce - default false
// style - default {}

// scripts
// import Opacity from '../scripts/opacity-wrapper';
import ActiveSection from '../scripts/active-section';

// pages
import Header from '../header/header';
import Landing from './landing-page';
import AboutMike from './about';
import Approach from './approach';
import MikesProjects from './projects';
import ContactMike from './contact';

configureAnchors({offset: -45, scrollDuration: 300})

class Home extends Component {
  componentDidMount() {
    //console.log('I was triggered during componentDidMount')
  }

  render() {
    var menuRef = React.createRef();
    //console.log('I was triggered during render')
    return (
      <div className="content">
        <ReactBody className="home-page" />     
          <StickyContainer> {/* THIS STICKY CONTAINER MUST WRAP THE ENTIRE PAGE - CAN HAVE NESTED CONTAINERS AS WELL */}
            <Header ref={menuRef} />
              <section className="new-section home" data-aos="fade-in"> 
                <ScrollableAnchor id={'section-home'}>
                  <ActiveSection index="0" refToMenu={menuRef}>
                    <Landing />
                  </ActiveSection>
                </ScrollableAnchor> 
              </section>
              <section className="new-section about" data-aos="fade-in">
                <ScrollableAnchor id={'section-about'}>
                  <ActiveSection index="1" refToMenu={menuRef}> 
                    <AboutMike />
                  </ActiveSection>
                </ScrollableAnchor>
              </section>
              <section className="new-section approach">
                <ScrollableAnchor id={'section-approach'}>
                  <ActiveSection index="2" refToMenu={menuRef}> 
                    <Approach />
                  </ActiveSection>
                </ScrollableAnchor>
              </section>
              <section className="new-section projects">
                <ScrollableAnchor id={'section-projects'}>
                  <ActiveSection index="3" refToMenu={menuRef}>
                    <MikesProjects />
                  </ActiveSection>
                </ScrollableAnchor>
              </section>
              <section className="new-section contact" data-aos="fade-in">
                <ScrollableAnchor id={'section-contact'}>
                  <ActiveSection index="4" refToMenu={menuRef}>
                    <ContactMike />
                  </ActiveSection>
                </ScrollableAnchor>
              </section>
          </StickyContainer>
      </div>
    );
  }
} 

export default Home;
