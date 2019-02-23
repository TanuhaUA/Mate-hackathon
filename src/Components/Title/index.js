import React, {Component} from 'react';
import "./style.scss";

class Title extends Component {
  render() {
    return (
      <h2 className="title">Our <span className="title--purple">skills</span></h2>
    )
  }
}

export default Title;