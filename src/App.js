import React, { Component } from 'react';
import HomePage from './Components/HomePage';
import './Styles/main.scss'
import OurSkills from "./Components/OurSkills";

class App extends Component {
  render() {
    return (
      <div className="App">
        Mate hackathon
        <HomePage/>
        <OurSkills />
      </div>
    );
  }
}

export default App;
