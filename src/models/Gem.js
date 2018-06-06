import React, {
    Component
} from 'react';
import '../styles/Card.css';

class Gem extends Component {
    
   
    
    constructor(props){
        super(props);
        console.log(props);
//        this.state = {
//            value:props.text,
//            props:props
//        };
        
        this.setState({
            value:props.text,
            props:props
        });
        
        console.log(this.state);
        
        this.onGemPick = this.onGemPick.bind(this);
        
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
            <button onClick={this.props.handler} type = "button" className = {classnames}> {this.props.text} < /button>    
        );



    }
}

export default Gem;
