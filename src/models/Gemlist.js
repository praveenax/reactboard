import React, {
    Component
} from 'react';
import '../styles/Card.css';
import Gem from './Gem';

class Gemlist extends Component {
    
   
    
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            value:props.text,
            props:props,
            red:6,
            violet:7,
            blue:4,
            green:5,
            black:4
        };
        
        console.log(this.state);
        
        this.onGemPick = this.onGemPick.bind(this);
        this.addValue = this.addValue.bind(this);
    }
    
    addValue(){
        console.log("UPDATED123");
//        console.log(val);
        this.setState({red:2});
    }

    onGemPick() {
        console.log("test");
//        var newVal = value  - 1;
        var newVal = 0;
//        console.log(val);
//        this.setState({value:newVal}); 
//        this.state.props.handler();
        
//        console.log(this.props.handler);
    }

    render() {

        var classnames = "btn " + this.props.type + "-gem gembtn";

        return ( 
            <div className="col-md-12">
                random gems
                <br />
                <Gem handler={this.addValue} className="col"  text={this.state.red} type="red" />
                <Gem handler={this.addValue}  className="col"   text={this.state.violet} type="violet" />
                <Gem handler={this.addValue} className="col"   text={this.state.blue} type="blue"/>
                <Gem handler={this.addValue}  className="col"   text={this.state.green} type="green"/>
                <Gem handler={this.addValue}  className="col"   text={this.state.black} type="black"/>
            </div>  
        );



    }
}

export default Gemlist;
