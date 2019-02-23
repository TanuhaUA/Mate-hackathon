import React, { Component } from 'react';
import './style.scss';

class PortfolioPage extends React.Component {
  render() {
      return (
        <div className='portfolio-page'>
          <ul className='portfolio-page__tabs'>
            <li className='Portfolio-page__tabs-item Portfolio-page__tabs-item--active'>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>

          <div className="portfolio-page__images">
            <div className="portfolio-page__images-items">
            </div>
          </div>
        </div>
      )
    }
}

export default PortfolioPage;