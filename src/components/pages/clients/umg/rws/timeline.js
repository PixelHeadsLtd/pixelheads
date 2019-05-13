import React, { Component } from 'react';

// images
import timeLine from '../../../../../images/clients/umg/rws/rws-timeline-concept2.png';
import timeLineOpt from '../../../../../images/clients/umg/rws/rws-timeline-concept1.png';
import timeLinePage from '../../../../../images/clients/umg/rws/rws-timeline-landing-page.png';

class Timeline extends Component {
  render() {
    return (
      <div>
       <h2>Timeline Design</h2>
        <img className="timeline" src={timeLine} alt="" />
        <img className="timeline" src={timeLineOpt} alt="" />
        <img className="timeline" src={timeLinePage} alt="" />
      </div>
    );
  }
}

export default Timeline;
