import React, { Component } from 'react';
import './Styles/main.scss'
import OurSkills from "./Components/OurSkills";
import BlogPage from './Components/BlogPage/BlogPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OurSkills />
        <BlogPage/>
      </div>
    );
  }
}

export default App;
