import React, { Component } from 'react';
import '../styles/Card.css';
import Gem from './Gem';

class Card extends Component {
    
    min = 1;
    max = 5;
    
    cost_min = 1;
    cost_max = 3;

    random(){
        return Math.round(this.min + (Math.random() * (this.max - this.min)))
    }
    
    randomCost(){
        return Math.round(this.cost_min + (Math.random() * (this.cost_max - this.cost_min)))
    }

  render() {
      
    var classname = 'btn cardstyle cardstyle-'+this.random();
    var cost_classname = 'col costGem costGem-1';   
    var cost_classname2 = 'col costGem costGem-2';   
    var cost_classname3 = 'col costGem costGem-3';   
    var cost_classname4 = 'col costGem costGem-4';   
    var cost_classname5 = 'col costGem costGem-5';
    
      //logic to get 2 to 3 gems
      
      
    return (
        <button type="button" className={classname}>
            <div className="row costrow">
                <div className={cost_classname}>
                   {this.randomCost()}
                </div>
                <div className={cost_classname2}>
                    {this.randomCost()}
                </div>
               <div className={cost_classname3}>
                    {this.randomCost()}
                </div>
               <div className={cost_classname4}>
                    {this.randomCost()}
                </div>
                <div className={cost_classname5}>
                    {this.randomCost()}
                </div>
               
            </div>
        </button>    
    );
  }
}

export default Card;
