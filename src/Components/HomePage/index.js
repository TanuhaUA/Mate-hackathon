import React from 'react';
import './style.scss';
import '../../Styles/main.scss';
import Logo from '../Logo';

class HomePage extends React.Component {
  render() {
    return (
      <div className="home">
        <Logo color='#676767' fontSize='30px'/>
        <h1 className="home__title home__title--main">Fusce rutrum pretium lorem sempter nulla</h1>
        <p className="home__title home__title--sub"> lorem ipsum furcum pretium lorem septer nulla gu op dunap sulem lorem do burta</p>
        <div className="home__icon-box">
          <div className="home__icon">
            <img className="icon__item" src="./img/settings.png" alt="icon"/>
            <p className="home__icon-text">About</p> 
          </div>
          <div className="home__icon">
            <img className="icon__item" src="./img/settings.png" alt="icon"/>
            <p className="home__icon-text">Team</p> 
          </div>
          <div className="home__icon">
            <img className="icon__item" src="./img/settings.png" alt="icon"/>
            <p className="home__icon-text">Services</p> 
          </div>
          <div className="home__icon">
            <img className="icon__item" src="./img/settings.png" alt="icon"/>
            <p className="home__icon-text">Portfolio</p> 
          </div>
          <div className="home__icon">
            <img className="icon__item" src="./img/settings.png" alt="icon"/>
            <p className="home__icon-text">Blog</p> 
          </div>
          <div className="home__icon">
            <img className="icon__item" src="./img/settings.png" alt="icon"/>
            <p className="home__icon-text">Contacs</p> 
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;
