import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SchoolList from './components/SchoolList';
import Other from './components/Other';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={SchoolList}/>
          <Route path="/other" exact component={Other}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
