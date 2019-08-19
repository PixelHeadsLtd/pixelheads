import React, { Component } from 'react';

// Scripts
import HorizontalPan from '../../../scripts/horizontal-pan';
import SvgShub from './svg-shub';

// images
import Logo from '../../../../images/clients/pages/umg/branding-umg-studiohub-on-blk.svg';

class Logos extends Component {

  constructor(props){
    super(props);
    this.state = { pos : null, isVisible : false }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.element = React.createRef();
    this.setState({element: this.element})

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
   }

   handleScroll = () => {
    if(this.checkVisible(this.state.element.current)) { // after in view
      this.setState({isVisible: true})
    }  
    else {
      this.setState({isVisible: false})
    }
  };

  render() {
    return (
      <div ref={this.element}>
        <div className="positioning"><h2 className="white fixed">Universal Music: StudioHub Logo Design {this.state.pos}</h2></div>
        <div className="pan-wrapper shift-shlogo"> {/* sets class for sibling i.e HorizontalPan */}
          <HorizontalPan direction="left">
            <section className="stuhub-logo fixed">
              <img src={Logo} alt="" />
              {/* {this.state.isVisible &&
                <SvgShub />
              } */}
              <div className="umg-font-info"> 
                  <h3>Font: </h3>
                  <p>
                    The font was designed in Adobe Illustrator from the base font ‘Swis721 Th BT’ forming 
                    the character composition.
                  </p>
                  <p>
                    Alterations include the following:
                    Removal of serifs on the characters ‘u’, ‘d’ and ‘b’ 
                    Descenders and Extenders redrawn and at different weights and lengths
                    Rounded corners added to all endpoints
                    Additional Graphics incorporated to form the overall design.
                  </p>
              </div>
              <div className="umg-graphics-info">
                  <h3>Graphics</h3>
                  <p>
                    Power button. Modified to flow with main characters.
                    The concept being to Power up studio hub, 
                    this would work for both video and audio.
                    The triangle on the ‘i’ replaces the dot and represents a
                    flag to exemplify studio hub as the central point. 
                  </p>
              </div>
            </section>
          </HorizontalPan>
        </div>
      </div>
    );
  }
}

export default Logos;
