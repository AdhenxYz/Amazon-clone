import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Components/Header';
import Home from './Pages/Home';
import CheckOut from './Pages/Checkout';
import Login from './Pages/Login';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/checkout'>
            <Header />
            <CheckOut />
          </Route>
          <Route path='/Login'>
            <Login />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
