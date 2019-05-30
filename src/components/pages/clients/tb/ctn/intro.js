import React, { Component } from 'react';

// images
import home from '../../../../../images/clients/tb/cn/home.jpg';

class Intro extends Component {
  render() {
    return (
      <div>
        <h2>Turner Broadcasting - Part of Warner Bros</h2>
        <h3>Overview</h3>
        <p>As Senior UX Designer and Front-End Developer working within a Drupel Framework, my responsibility was to theme 4 main sites. 
          These were Cartoon Network, Adult Swim, Boomerang and CNN. My role included UX Design, Animation (Flash and ActionScript) and
          Front-End development.</p>
        <img src={home} alt="" />
      </div>
    );
  }
}

export default Intro;
