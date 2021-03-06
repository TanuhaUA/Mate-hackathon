import React, {Component} from 'react';
import './style.scss';
import Title from './../Title';
import Progress from './Progress';
import PurpleBackground from './../PurpleBackground'

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
      <div>
        <div className="our-skills">
          <Title title={title} titlePurple={titlePurple}/>
          <div className="our-skills__levels clearfix">
            {this.getProgressValue()}
          </div>
        </div>
        <PurpleBackground
          paragraphInner={'Our services will lorem and ipsum  your aliquam'}
          hexagonInner={'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NC41IiBoZWlnaHQ9IjU2LjQ0IiB2aWV3Qm94PSIwIDAgNjQuNSA1Ni40NCI+ICA8bWV0YWRhdGE+PD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz48eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+ICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+ICAgPC9yZGY6UkRGPjwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/PjwvbWV0YWRhdGE+PGRlZnM+ICAgIDxzdHlsZT4gICAgICAuY2xzLTEgeyAgICAgICAgZmlsbDogI2ZmZjsgICAgICAgIGZpbGwtcnVsZTogZXZlbm9kZDsgICAgICB9ICAgIDwvc3R5bGU+ICA8L2RlZnM+ICA8cGF0aCBpZD0iYnViYmxlIiBjbGFzcz0iY2xzLTEiIGQ9Ik0xMDAwLjI1LDU4MzcuNjRjLTEyLjAyLDAtMjIuMTczLDYuNDctMjIuMTczLDE0LjExYTEuMDA4LDEuMDA4LDAsMSwwLDIuMDE2LDBjMC02LjQ0LDkuNDE4LTEyLjA5LDIwLjE1Ny0xMi4wOUExLjAxLDEuMDEsMCwwLDAsMTAwMC4yNSw1ODM3LjY0Wm0wLTEwLjA3Yy0xNy44MTMsMC0zMi4yNSwxMC44My0zMi4yNSwyNC4xOCwwLDguMzIsNS42LDE1LjY1LDE0LjEyNCwyMC4wMSwwLDAuMDUtLjAxNi4wOS0wLjAxNiwwLjE1LDAsMy42MS0yLjcsNy41LTMuODg1LDkuNTRoMEExLjgyNSwxLjgyNSwwLDAsMCw5NzkuOSw1ODg0YzAuMTg5LDAsLjUyMS0wLjA1LjUxNC0wLjAzLDYuMy0xLjAzLDEyLjIzMi02LjgxLDEzLjYxLTguNDlhNDMuNTkyLDQzLjU5MiwwLDAsMCw2LjIyMi40NmMxNy44MSwwLDMyLjI1LTEwLjgzLDMyLjI1LTI0LjE5UzEwMTguMDYsNTgyNy41NywxMDAwLjI1LDU4MjcuNTdabTAsNDQuMzRhMzguNiwzOC42LDAsMCwxLTUuNjM3LS40MiwzLjg1MiwzLjg1MiwwLDAsMC0uNTg1LTAuMDQsNC4wMjksNC4wMjksMCwwLDAtMy4xMTYsMS40NywyNy4yMDksMjcuMjA5LDAsMCwxLTYuMjE3LDUuMTIsMTUuNzc3LDE1Ljc3NywwLDAsMCwxLjQ0Mi01LjkxYzAuMDEyLS4xMy4wMTgtMC4yNiwwLjAxOC0wLjM3YTQuMDI1LDQuMDI1LDAsMCwwLTIuMi0zLjU5Yy03LjQ2OS0zLjgyLTExLjkyNy05Ljk1LTExLjkyNy0xNi40MiwwLTExLjExLDEyLjY1OC0yMC4xNSwyOC4yMTktMjAuMTVzMjguMjEsOS4wNCwyOC4yMSwyMC4xNVMxMDE1LjgxLDU4NzEuOTEsMTAwMC4yNSw1ODcxLjkxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk2OCAtNTgyNy41NikiLz48L3N2Zz4='}
        />
      </div>
    )
  }
}

export default OurSkills;