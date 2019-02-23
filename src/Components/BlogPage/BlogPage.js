import React, { Component } from 'react';
import Percentage from './Percentage';
import Posts from './Posts';

class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.changeState = changeState.bind(this);
    // this.changeComponents = changeComponents.bind(this);
  }
  componentDidMount() {    
    fetch('https://tanuhaua.github.io/datas-file-json/bhagaskara/blog.json')
    .then( response => {    
      if (response.status === 200) {
        return response.json();
        
      }
    })
    .then( obj => {
      this.setState(obj);        
    })    
  }
  render() {
    const {statistic = {}, posts = []} = this.state;
    
    return (
      <div>
        <Percentage statistic={statistic}/>
        <Posts posts={posts}/>
      </div>
    );
  }
}

export default BlogPage;

