import React from 'react';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
 
import Movies from './pages/Movies';

function App() {
  return (
    <Router>
 
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/" component={Movies} />
      </Switch>
    </Router>
  );
}

export default App;
