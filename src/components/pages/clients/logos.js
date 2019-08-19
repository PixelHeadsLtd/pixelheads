import React, { Component } from 'react';

// images
import Abbey from '../../../images/client-logos/AbbeyRoad.png';
import Amazon from '../../../images/client-logos/Amazon.png';
import Apple from '../../../images/client-logos/Apple.png';
import BBC from '../../../images/client-logos/BBC.png';
import Capitol from '../../../images/client-logos/Capitol.png';
import Deezer from '../../../images/client-logos/Deezer.png';
import DefJam from '../../../images/client-logos/DefJam.png';
import Discovery from '../../../images/client-logos/Discovery.png';
import EMI from '../../../images/client-logos/emi.png';
import Interscope from '../../../images/client-logos/Interscope.png';
import Island from '../../../images/client-logos/IslandRecords.png';
import Pfizer from '../../../images/client-logos/Pfizer.png';
import Spotify from '../../../images/client-logos/Spotify.png';
import TNA from '../../../images/client-logos/TNA.png';
import Turner from '../../../images/client-logos/Turner.png';
import UMG from '../../../images/client-logos/UMG.png';
import Virgin from '../../../images/client-logos/Virgin.png';

class Logos extends Component {

  constructor(props){
    super(props);
    this.state = { pos : null }
  }

  render() {
    return (
      <div className="images"> 
        <h1 className="white mt-20p">Clients</h1>
        <img className="logo-abbey" src={Abbey} alt="" />
        <img className="logo-amazon" src={Amazon} alt="" />
        <img className="logo-apple" src={Apple} alt="" />
        <img className="logo-bbc" src={BBC} alt="" />
        <img className="logo-capitol" src={Capitol} alt="" />
        <img className="logo-deezer clear" src={Deezer} alt="" />
        <img className="logo-defjam" src={DefJam} alt="" />
        <img className="logo-discovery" src={Discovery} alt="" />
        <img className="logo-emi" src={EMI} alt="" />
        <img className="logo-interscope" src={Interscope} alt="" />
        <img className="logo-island clear" src={Island} alt="" />
        <img className="logo-pfizer" src={Pfizer} alt="" />
        <img className="logo-spotify" src={Spotify} alt="" />
        <img className="logo-tna" src={TNA} alt="" />
        <img className="logo-turner clear" src={Turner} alt="" />
        <img className="logo-umg" src={UMG} alt="" />
        <img className="logo-virgin" src={Virgin} alt="" />
        <div className="bg-color white"></div>
      </div>
    );
  }
}

export default Logos;
