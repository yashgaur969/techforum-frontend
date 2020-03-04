import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, BrowserRouter as Router, Switch, BrowserRouter } from 'react-router-dom'
import { SignUp } from './components/SignUp';
import { LogIn } from './components/LogIn';
import Dashboard from './components/Dashboard';
import { Home } from './Home';
import { Notifications } from './components/Notifications';
import { Profile } from './components/Profile';


function App() {
  return (
    <BrowserRouter>
     <switch>
       <Route exact={true} path="/" component={SignUp} />
       <Route exact={true} path="/login" component={LogIn} />
       <Route exact={true} path="/dashboard" component={Dashboard} />
       <Route exact={true} path="/home" component={Home} />
       <Route exact={true} path="/notifications" component={Notifications} />
       <Route exact={true} path="/profile" component={Profile} />
     </switch>
     </BrowserRouter>
  );
}

export default App;
