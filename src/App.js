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

function App() {
  let routes = [];
  for (var path in curriculum) {
    if (Object.prototype.hasOwnProperty.call(curriculum, path)) {
      const routing_path = (path === "/") ? "/" : (path.startsWith("/lesson")) ? "/lesson/:id" : "/:id";
      const comp = (path.startsWith("/lesson")) ? Lesson : OptionList
      routes.push(
        <Route key={path} path={routing_path} exact component={comp} />
      );
    }
  }
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
      <div className="top-buffer"></div>
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

export default App;
