import React from 'react';
import { NavLink } from 'react-router-dom'
import Logo from '../Logo';
import './style.scss';

class Header extends React.Component {
  render() {
    return (
      <header className="header clearfix">
        <div className="content">
        <span className="content__item logo">
          <Logo color="#676767' fontSize='30px"/>
        </span>
          <nav className="content__item menu">
            <ul className="menu__items">
              <li className="menu__item"><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
              <li className="menu__item"><NavLink to="/about" activeClassName="active">About</NavLink></li>
              <li className="menu__item"><NavLink to="/team" activeClassName="active">Team</NavLink></li>
              <li className="menu__item"><NavLink to="/services" activeClassName="active">Services</NavLink></li>
              <li className="menu__item"><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
              <li className="menu__item"><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
              <li className="menu__item"><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;