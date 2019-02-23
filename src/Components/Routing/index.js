import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Redirect from 'react-router-dom/es/Redirect';
import OurSkills from '../OurSkills';
import AboutUs from '../AboutUs';
import Page404 from '../Page404';
import HomePage from '../HomePage';

class Routing extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={AboutUs}/>
          {/*<Route path="/team" component={OurTeam}/>*/}
          <Route path="/services" component={OurSkills}/>
          {/*<Route path="/portfolio" component={PortfolioPage}/>*/}
          {/*<Route path="/blog" component={BlogPage}/>*/}
          {/*<Route path="/contact" component={ContactPage}/>*/}
          <Route path="/404" component={Page404}/>
          <Redirect to="/404"/>
        </Switch>
      </main>
    );
  }
}

export default Routing;