import React from 'react';
import './App.css';
import './Navbar.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import OptionList from './components/OptionList';
import curriculum from './curriculum.json'

function App() {
  let routes = [];
  for (var path in curriculum) {
    if (Object.prototype.hasOwnProperty.call(curriculum, path)) {
      let routing_path = (path === "/") ? "/" : "/:id";
      routes.push(
        <Route path={routing_path} exact component={OptionList} />
      );
    }
  }
  console.log(routes);
  return (
    <Router>
      <div className="navbar">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/">News</Link>
        <Link className="link" to="/">Contact</Link>
      </div>
      <div className="App">
        <Switch>
          {routes}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
