import React, { Component } from 'react';

import Research from '../../images/icons/icon-research.svg';
import Design from '../../images/icons/icon-design.svg';
import Development from '../../images/icons/icon-development.svg';

class About extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>About</h1>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <p className="comment">OK, so who’s this Mike bloke? </p>
            <p>He’s a creative fella, can turn his 
            hand to most things, but there’s a bit more to 
            him than that...</p>
            <p>Like many folks growing up, Mike didn’t really 
            know what career he wanted, he was always 
            sketching and had a passion for Art, Design 
            Music and Photography.</p>
            <p>He studied Design and Design History at 
            Ravensbourne College of Design & Communication
            which forms part of the RCA with a Bauhaus 
            approach to design teaching.</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <p className="comment">Is he still talking?</p>
            <p>Following graduation, Mike’s first positions were 
              working for Design & Marketing agencies. 
              His role was to conceptualise & design online 
              solutions: advertising & marketing campaigns 
              for their clients, which included Mars, Guinness, 
              Toshiba, Willian Hill, Setanta, Sainsburys, Monum, Mars, Coca Cola, 
              Barclays Bank, SEB Bank and many others.</p>
            <p>A few years later Mike embarked on a 
              contracting career and ended up working
              client-side for some of the larger organisations.</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <p>No particular reason for 
              this, it’s just the way things went. </p>
            <p>During this time he’d been lucky enough 
              to work on some very large projects 
              including the Discovery Channel, BBC TopGear, 
              Cartoon Network and more recently Universal Music.</p>
            <p className="comment">So I said there was more to Mike than that.</p>
            <p>Well, during his career Mike had an interest 
              in Front-End development, on many projects
              he’s been hands-on and in his experience
              most back-end developers</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <p>need a creative
              front-ender to reproduce pixel-perfect
              representations of the final designs, that’s where 
              his skills shine.</p>
            <p>Mike’s a fully seasoned CSSer, acting as main mentor 
              on all things SASS, LESS & HTML5 related. He has working
              FE experience of RESTFUL API's such as Angular & React.</p>
            <p className="comment">Some clients looking for pure UXers see 
              the dev experience as detremental. Please don’t!
              ULTIMATLEY MIKE”S A UX DESIGNER, the dev thing is 
              merely another notch to his belt. If it
              comes to it, you may even find you could use 
              these skills on your project?</p>
          </div>
        </div>
        <div className="icons">
          <div>
            <img src={Research} alt="" />
            <p className="spaced"><span>USER RESEARCH</span><br />
              PERSONAS, USER STORIES,<br />
              WIREFRAMES, TESTING</p>
          </div>
          <div>
            <img src={Design} alt="" />
            <p className="spaced"><span>VISUAL DESIGN</span><br />
              WEB & BRAND DESIGN,<br />
              TYPOGRAPHY</p>
          </div>
          <div>
            <img src={Development} alt="" />
            <p className="spaced"><span>FRONT-END DEVELOPMENT</span><br />
              MODERN FRAMEWORKS,<br />
              RESTFUL API’S</p>
          </div>
        </div>
      </div>
    );
  }
} 

export default About;
