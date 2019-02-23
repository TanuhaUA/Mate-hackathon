import React, { Component } from 'react';
import './style.scss';
import PPImagesItem from '../PPImagesItem';

class PortfolioPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      isLoading: false,
      currentAmountOnPage: 6
    }
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://tanuhaua.github.io/datas-file-json/bhagaskara/portfolio.json', true); // замените адрес
    xhr.send();
    this.setState({ isLoading: true })

    xhr.onload = () => {
      if (xhr.status !== 200) {
        console.log(xhr.status + ': ' + xhr.statusText );
      } else {
        this.setState({
          data: JSON.parse(xhr.responseText),
          isLoading: false,
        })
      }
    }
  }

  handleClick() {
    const {currentAmountOnPage} = this.state;
    this.setState({ currentAmountOnPage: currentAmountOnPage + 6 })
  }



  render() {
    const tabsNameArray = [];
    const {data: dataArray, currentAmountOnPage} = this.state;
    dataArray.forEach((dataArrayItem) => {
      if (tabsNameArray.indexOf(dataArrayItem.type) === -1) {
        tabsNameArray.push(dataArrayItem.type);
      } 
    });

    const addSixItems = () => {
      const sixItems = [];
      if (dataArray.length && currentAmountOnPage <= dataArray.length) {
        for ( let i = 0; i < currentAmountOnPage; i++) {
          sixItems.push(<PPImagesItem key={i} title={dataArray[i].title} keywords={dataArray[i].keywords} alt={dataArray[i].title} src={dataArray[i].image} />);
        }
      }
      return sixItems;
    }

    return (
      <section className="portfolio-page">
        <div className="portfolio-page__wrapper">
          <ul className="portfolio-page__tabs">
            <li className="portfolio-page__tabs-item portfolio-page__tabs-item--active">All</li>
            {tabsNameArray.map((tabsNameArrayItem, i) => {
              return <li key={i} className="portfolio-page__tabs-item">{tabsNameArrayItem}</li>
            })}
          </ul>

          <div className="portfolio-page__images">
          { addSixItems()}
          </div>
          <button className="portfolio-page__button" type="button" onClick={this.handleClick.bind(this)}>Watch more</button>
        </div>
      </section>
    )
  }
}

export default PortfolioPage;