import React from 'react';
import './style.scss';
import '../../Styles/main.scss'

class HomePage extends React.Component {
  render() {
    return (
      <div className="home">
        {/* <Logo color='#676767' fontSize='30px'/> */}
        <h1 className="home__title home__title--main">Fusce rutrum pretium lorem sempter nulla</h1>
        <p className="home__title home__title--sub"> lorem ipsum furcum pretium lorem septer nulla gu op dunap sulem lorem do burta</p>
        <div className="home__icon">
          <p className="home__icon-text">flndslfn</p> 
        </div>
      </div>
    )
  }
}

export default HomePage;
