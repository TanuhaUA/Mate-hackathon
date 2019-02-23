import React, {Component} from 'react';
import './style.scss';
import Title from './../Title';
import Progress from './Progress';

class OurSkills extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    this.getProgressValue = this.getProgressValue.bind(this);
  }


  getProgressValue() {
    return this.state.data.map(item => <Progress key={item.value} skill={item.skill} value={item.value}/>)
  }

  componentDidMount() {
    fetch('https://tanuhaua.github.io/datas-file-json/bhagaskara/skills.json')
      .then(response => response.json()).then(response => this.setState({data: response}));
  }


  render() {
    const title = 'Our';
    const titlePurple = 'skills';
    return (
      <div className="our-skills">
        <Title title={title} titlePurple={titlePurple}/>
        <div className="our-skills__levels">
          {this.getProgressValue()}
        </div>
      </div>
    )
  }
}

export default OurSkills;