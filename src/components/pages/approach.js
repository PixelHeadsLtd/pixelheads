import React, { Component } from 'react';

import Research from '../../images/icons/icon-research.svg';
import Design from '../../images/icons/icon-design.svg';
import Development from '../../images/icons/icon-development.svg';

// scripts
import Opacity from '../scripts/opacity-wrapper';

class About extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Approach</h1>
        <hr />
        <Opacity>
        <div className="row justify-content-md-center">
          <div className="col-md-auto">
            <img src={Research} alt="" />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
              <h4>Design Sprints</h4>
              <p>In a concentrated and highly focussed time period, cross-disciplinary teams can rapidly understand, define, prototype and 
                validate a design solution. Design sprints are a great way to get full team buy-in and find answers to complex problems.
              </p>
              <h4>Stakeholder Interviews</h4>
              <p>Understanding the why is at the core of being able to develop the how. Stakeholders often have invaluable 
                experience of the users, their behaviours and motivations can provide excellent context when developing a UX solution.
              </p>
              <h4>Customer Journey Mapping</h4>
              <p>A Customer Journey map is a visual representation of the overall story of a customer's relationship with 
                your company, product or service. The story highlights the intersections between their expectations and your offering. 
                This is very useful in trying to understand how the user feels and reacts to different interactions and how 
                they can be optimised for a better user experience.</p>
          </div>
        </div>
        </Opacity>
        <Opacity>
        <div className="row justify-content-md-center">
          <div className="col-md-auto">
            <img src={Research} alt="" />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
              <h4>User Testing</h4>
              <p>Having users involved early and often yields the greatest results. Observing users attempting to complete 
                tasks with a prototype of your product can help you identify usability problems as early as possible, so they 
                can be fixed before the design is implemented.
              </p>
              <h4>Storyboarding</h4>
              <p>Storyboarding is a useful human centred design approach. Storyboards help us explore and predict the user’s 
                experience with a product. We can use them to think about the context of use, what users are feeling and 
                looking for at each stage and how we can best meet their needs. Visualising the user journey in this way can 
                also help us to build a strong narrative that engages and delights users.</p>
              <h4>Wireframing</h4>
              <p>Wireframes are extremely useful to help define the user flow and hierarchy of information on the screen. 
                Removing all visual design and brand elements helps us to focus on the functionality and principles of the 
                journey. They are a visual way to communicate abstract ideas to colleagues, stakeholders and users in order 
                to help elaborate the UX design.
              </p>
          </div>
        </div>
        </Opacity>
        <hr />
        <Opacity>
        <div className="row justify-content-md-center">
          <div className="col-md-auto">
            <img src={Design} alt="" />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <h4>Design Patterns</h4>
            <p>Keeping abreast of modern design patterns and trends is an absolute must when desiging any product. As designers, 
              we cannot live in a vacuum and ignore the world around us. I believe great design leads to great experiences and 
              enriches our lives. Everything is designed and the things we love the most are the things that are designed well.
            </p>
            <h4>Typography</h4>
            <p>Many people never really consider typography. They may not always understand the psychological effect it has in relation to 
              conveying a message. Good typography invites a reader to actually read a text. Designers must take great care in considering 
              the typographical approach when designing a peice of work and how fonts can help solidify a given brand.
            </p>
          </div>
        </div>
        </Opacity>
        <hr />
        <Opacity>
        <div className="row justify-content-md-center">
          <div className="col-md-auto">
            <img src={Development} alt="" />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <h4>Modern Frameswork</h4>
            <p>Modern Framesworks such as React, Angular and Aurelia have vastly improved the entire experience of developing cutting 
              edge software that deliver immediate feedback for users. Restful API's have enhanced the user experience and have vastly 
              improved both development efficiency and code maintainability.
            </p>
            <h4>Front-End Development</h4>
            <p>On projects with limited resources, designers are sometimes expected to have mastered front-end development. 
              Though not all clients require this and many have the available funds to split teams into their specialist areas, having solid foundations 
              in this area will not only vastly speed up delivery on a given project, but also help bridge the gap between the visual side (prototyping) 
              and the back-end (architecture).
            </p>
          </div>
        </div>
        </Opacity>
      </div>
    );
  }
} 

export default About;
