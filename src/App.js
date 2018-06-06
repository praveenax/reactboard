import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gemlist from './models/Gemlist';
import Card from './models/Card';

class App extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            red:7
        }
        
        this.addValue = this.addValue.bind(this);
    }
    
    addValue(){
        console.log("UPDATED");
//        console.log(val);
        this.setState({red:2})
    }
    
      render() {
        return (
          <div className="App">
            <header >
              <h1 className="App-title">Gem Game</h1>
            </header>


            <div>
                <div className="row">
                    <div className="col-md-8">
                        random card
                        <br />
                        <Card />
                        <Card />
                        <Card />

                    </div>
                    <div className="col-md-4">
                            <Gemlist />
                            

                        <div className="col-md-12">
                            competition
                        </div>


                    </div>


                </div>

                <div className="row">
                    <div className="col">

                    </div>        
                </div>

            </div>

            <div className="playerTable">
                <table className="table">
                    <tbody>
                    <tr>
                        <td className='red-gem'>1</td>
                        <td className='violet-gem'>1</td>
                        <td className='blue-gem'>1</td>
                        <td className='green-gem'>1</td>
                        <td className='black-gem'>1</td>
                    </tr>
                    </tbody>
                </table>
            </div>

          </div>
        );
      }
}

export default App;
