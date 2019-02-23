import React, {Component} from 'react';
import './style.scss';
import PPImagesItem from '../PPImagesItem';
import Title from '../Title';

class PortfolioPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      currentAmountOnPage: 6
    }
  }

  componentDidMount() {
    fetch('https://tanuhaua.github.io/datas-file-json/bhagaskara/portfolio.json')
      .then(response => response.json().then(response => this.setState({
          data: response,
          isLoading: false,
        })
      ))
  }

  handleClick() {
    const {currentAmountOnPage} = this.state;
    if (currentAmountOnPage + 6 > this.state.data.length) {
      this.setState({currentAmountOnPage: currentAmountOnPage + (this.state.data.length - currentAmountOnPage)});
    } else {
      this.setState({currentAmountOnPage: currentAmountOnPage + 6});
    }
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
        for (let i = 0; i < currentAmountOnPage; i++) {
          sixItems.push(<PPImagesItem key={i} title={dataArray[i].title} keywords={dataArray[i].keywords}
                                      alt={dataArray[i].title} src={dataArray[i].image}/>);
        }
      }
      return sixItems;
    };

    const addSixItemsByFilterType = (type) => {
      const sixItemsByFilterType = [];
      if (dataArray.length && currentAmountOnPage <= dataArray.length) {
        for ( let i = 0; i < currentAmountOnPage; i++) {
          if (dataArray[i].type === type) {
            sixItems.push(<PPImagesItem key={i} title={dataArray[i].title} keywords={dataArray[i].keywords} alt={dataArray[i].title} src={dataArray[i].image} />);
          }
        }
      }
      return sixItems;
    }

    return (
      <section className="portfolio-page">
        <div className="portfolio-page__wrapper">
          <Title title="Our" titlePurple="portfolio"/>
          <ul className="portfolio-page__tabs">
            <li className="portfolio-page__tabs-item portfolio-page__tabs-item--active">All</li>
            {tabsNameArray.map((tabsNameArrayItem, i) => {
              return <li key={i} className="portfolio-page__tabs-item">{tabsNameArrayItem}</li>
            })}
          </ul>

          <div className="portfolio-page__images">
            {addSixItems()}
          </div>
          {this.state.currentAmountOnPage !== this.state.data.length ? <button className="portfolio-page__button" type="button" onClick={this.handleClick.bind(this)}>Watch more
          </button> : null}
        </div>
      </section>
    )
  }
}

export default PortfolioPage;