import React, { Component } from 'react';
import sizeMe from 'react-sizeme';
import './style.scss';

export class SliderInner extends Component {
  render() {
    // console.log(this.props.size.width);
    console.log(this.props.size.width * this.props.countClicks);
    let showItemFromTeamList = () => {
      let arr = this.props.teamList,
          result = [];
      if (!arr[arr.length - 1]) return;
      if (!arr[arr.length - 1].avatar_url) return;
      for (let i = 0; i < arr.length; i++) {
        result.push(
          <div className="slider__item" key={ i }>
            <img className="slider__photo" src={ arr[i].avatar_url } alt="photo of person from team"/>
            <h3 className="slider__name">
              { arr[i].fullName }
            </h3>
            <p className="slider__position">
              CEO / Google inc.
            </p>
            <div>
              <a href="#" className="slider__icon">f</a>
              <a href="#" className="slider__icon">g</a>
            </div>
          </div>
        );
      }
      return result;
    };
    
    let moveOn = this.props.size.width * this.props.countClicks;

    // let countClicks = this.props.countClicks;
    
    // if (this.props.size.width * countClicks > 0) {
    //   countClicks = 0;
    // } 
    // let moveOn = this.props.size.width * countClicks;
    // console.log(moveOn);
    return (
      <div className="slider__inner" >
        <div className="slider__slides" style={{ transform: `translateX(${ moveOn }px)` }}>
          { showItemFromTeamList() }
        </div>
      </div>

    );
  }
}

export default sizeMe()(SliderInner);
// transform: `translateX(${this.props.size.width * this.props.countClicks}px)` 