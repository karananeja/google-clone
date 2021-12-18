import React from 'react';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/search/:searchTerm'>
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
