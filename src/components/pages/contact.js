import React, { Component } from 'react';
import ReactBody from 'react-body';

class Contact extends Component {
  render() {
    return (
      <div className="thanks">
        <ReactBody className="contact-page" />
        <h1>Thanks for Visiting</h1>
        <p>
            If you have a contract role you'd like to discuss
            please email <a mailto="info@pixel-heads.com">info@pixel-heads.com</a>
        </p>
        <p>
            I specialise in UX Design and Front-End Development.
            I frequency come onboard when a greenfield project needs the UI and User Journey 
            developed. During early stages this normally requires my expertise to undertake the following:
        </p>
        <ul>
            <li>Meet with stake-holders to fully understand the Business Requirements</li>
            <li>Identify clients target audience and possible areas of expansion</li>
            <li>Create a set of carefully constructed Personas</li>
            <li>Produce workflows describing the proposed architecture</li>
            <li>Setup workshops for AB User Testing</li>
            <li>Create wireframes and working prototupes based on findings</li>
            <li>Produce high-level static and interactive design Mochups and a stylistic brand</li>
            <li>Work with Back-End Developers to produce the Front-End</li>
        </ul>
    </div>
    );
  }
}

export default Contact;
