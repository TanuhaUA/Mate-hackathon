import React, { Component } from 'react';
import './Styles/main.scss'


import Header from './Components/Header';
import Routing from './Components/Routing';
import BlogPage from './Components/BlogPage/BlogPage';


class App extends Component {
  render() {
    return (
      <div className="App">


        <Header/>
        <Routing/>
        <BlogPage/>
      </div>
    );
  }
}

export default App;
