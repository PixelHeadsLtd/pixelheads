import React, { Component } from 'react';

// images
import umgLabelBanner from '../../../../../images/clients/umg/label-banner.png';

class Intro extends Component {
  render() {
    return (
      <div>
        <h2>Introduction</h2>
          <img className="umg-label-banner" src={umgLabelBanner} alt="" />
          <h3>Overview</h3>
          <p>
            Universal Music hired PixelHeads to design and build the front-end for a suite of applications, to enforce all Labels, Artist
            and contributors to manage all aspects of Music production, from the initial recording session, all the way through to market. 
            Essentially there are four projects in total, these are as follows:
          </p>
          <h4>Label Workspace</h4>
          <p>
            Label Workspace is where A&R Admin and Producers manage the entire repertoire. Here they create what's 
            known as commitiments 'albums'. Within a commitment users create and manage sessions, songs, contributors (i.e. musicians) etc.
          </p>
          <h4>Asset Workspace</h4>
          <p>
            All digtal assest are archived via the Asset Workspace application and physical assets are documented and managed here.
          </p>
          <h4>RightsHub</h4>
          <p>
            All legal contracts are managed via the RightsHub application, these include: Producer, Arist, Side Artists and Distrubution Agreements.
          </p>
          <h4>SupplyChain</h4>
          <p>
            Working with digital music outlets such as iTunes, Amazon, Spotify etc, the SupplyChain website is where the final products are shipped market.
          </p>
      </div>
    );
  }
}

export default Intro;
