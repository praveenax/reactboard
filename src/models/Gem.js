import React, { Component } from 'react';
import '../styles/Card.css';

class Gem extends Component {
  render() {
      
    var classnames = "btn " + this.props.type + "-gem gembtn";
    
    return (
      <button type="button" className={classnames}>{this.props.text}</button>    
    );   
    
      
    
  }
}

export default Gem;
