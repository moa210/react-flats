// import React, {Component} from 'react';
import logo from '../assets/logo.svg';
import flats from '../data/flats';
import Flat from './flat';
// import  Map from './map';
// import FlatList from './flat-list';
import '../assets/App.scss';
import {Component} from "react";

class App  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: [],
      SelectedFlatName: "Superbe vue à 2 min du Sacré Coeur",
      SelectedImageUrl: "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg"
    }
    this.SelectFlat = () => this.SelectFlat.bind(this);
  }

  // selectFlat(name) {
  //   this.setState({
  //     selectedFlat: name
  //   });
  // }
  render(){
    return (
        console.log("APP.jsx working"),
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <p>
              <Flat name = {this.state.SelectedFlatName}/>
              <Flat imageUrl = {this.state.SelectedImageUrl}/>
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
    );
  }
}

export default App;
