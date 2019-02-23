import React, { Component } from 'react';


class StatisticInformation extends Component {
  
  render() {
    return (
      (
      <div>        
        <h2>{this.props.percent}</h2>
        <h2>{this.props.title}</h2>
      </div>)
    );
  }
}

export default StatisticInformation;

