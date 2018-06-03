import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gem from './models/Gem';
import Card from './models/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header >
          <h1 className="App-title">Gem Game</h1>
        </header>
        
        
        <div>
            <div className="row">
                <div className="col-md-6">
                    random card
                    <br />
                    <Card />
                    <Card />
                    <Card />
                    
                </div>
                <div className="col-md-3">
                    random gems
                    <br />
                    <Gem className="col" text="1" type="red" />
                    <Gem  className="col" text="2" type="violet" />
                    <Gem className="col" text="3" type="blue"/>
                    <Gem  className="col" text="4" type="green"/>
                    <Gem  className="col" text="5" type="black"/>
                </div>
        
                <div className="col-md-3">
                    competition
                </div>
            </div>
        
            <div className="row">
                <div className="col">
                
                </div>        
            </div>
        
        </div>
        
        
      </div>
    );
  }
}

export default App;
