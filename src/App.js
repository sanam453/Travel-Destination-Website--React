import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Button from './components/Button';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import SignUp from './components/Pages/SignUp';




function App() {
  return (
   
    <div>
      <Router>
        <Navbar />
        <Button />
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/services' component={Services}></Route>
          <Route path='/products' component={Products}></Route>
          <Route path='/sign-up' component={SignUp}></Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
