import React, { Component } from 'react';
import HomePage from './Components/HomePage';
import OurSkills from './Components/OurSkills';
import './Styles/main.scss'
import Header from './Components/Header';
import Routing from './Components/Routing';

class App extends Component {
  render() {
    return (
      <div className="App">
        Mate hackathon
        <HomePage/>
        <OurSkills />
        <Header/>
        <Routing/>
      </div>
    );
  }
}

export default App;
