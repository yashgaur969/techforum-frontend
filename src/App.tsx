import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, BrowserRouter as Router, Switch, BrowserRouter } from 'react-router-dom'
import { SignUp } from './components/SignUp';
import { LogIn } from './components/LogIn';
import Dashboard from './components/Dashboard';
import { Home } from './Home';


function App() {
  return (
    <BrowserRouter>
     <switch>
       <Route exact={true} path="/" component={SignUp} />
       <Route exact={true} path="/login" component={LogIn} />
       <Route exact={true} path="/dashboard" component={Dashboard} />
       <Route exact={true} path="/home" component={Home} />
     </switch>
     </BrowserRouter>
  );
}

export default App;
