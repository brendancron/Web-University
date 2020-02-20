import React from 'react';

import './App.css';
import './Navbar.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import OptionList from './components/OptionList';
import About from './components/About';
import Donate from './components/Donate';
import Account from './components/Account';
import Home from './components/Home';
import Contact from './components/Contact';
import Lesson from './components/Lesson';
import Tools from './components/Tools';

import curriculum from './curriculum.json';

export default class App extends React.Component {
  getRoutes(obj, name, routes) {
    if (typeof obj.subClasses === 'undefined') {
      routes.push(
        <Route
          key={name}
          path={name}
          exact
          render={(props) => <Lesson {...props} classData={obj} />}
        />
      );
    } else {
      let data = {
        name: obj.name,
        description: obj.description,
        options: []
      }
      for (var sub in obj.subClasses) {
        let info = {
          path: sub,
          name: obj.subClasses[sub].name,
          description: obj.subClasses[sub].description
        }
        data.options.push(info);
        routes.concat(
          this.getRoutes(obj.subClasses[sub], sub, routes)
        );
      }
      routes.push(
        <Route
          key={name}
          path={name}
          exact
          render={(props) => <OptionList {...props} optionData={data} />}
        />
      );
    }
    return routes;
  }
  render() {
    let routes = this.getRoutes(curriculum['/'], '/', []);
    return (
      <Router>
        <div className="navbar">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/Account">Account</Link>
          <Link className="link" to="/About">About</Link>
          <Link className="link" to="/Donate">Donate</Link>
          <Link className="link" to="/Contact">Contact</Link>
          <Link className="link" to="/Tools">Tools</Link>
          <img src={require('./logo.svg')} alt="icon"></img>
        </div>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Switch>
            <Route path="/Account" exact component={Account} />
            <Route path="/About" exact component={About} />
            <Route path="/Donate" exact component={Donate} />
            <Route path="/Contact" exact component={Contact} />
            <Route path="/Tools" exact component={Tools} />
            {routes}
          </Switch>
        </div>
      </Router>
    );
  }
}
