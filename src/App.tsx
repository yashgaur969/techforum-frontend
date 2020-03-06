import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { SignUp } from './components/SignUp';
import { LogIn } from './components/LogIn';
import Dashboard from './components/Dashboard';
import { Home } from './Home';
import { Notifications } from './components/Notifications';
import { Profile } from './components/Profile';
import UserInfo from './components/UserInfo';
import UserPost from './UserPost';
import { Initial } from './components/Initial';


function App() {
  return (
    <BrowserRouter>
     <Switch>
       <Route exact={true} path="/signup" component={SignUp} />
       <Route exact={true} path="/login" component={LogIn} />
       <Route exact={true} path="/dashboard" component={Dashboard} />
       <Route exact={true} path="/home" component={Home} />
       <Route exact={true} path="/notifications" component={Notifications} />
       <Route exact={true} path="/profile" component={Profile} />
       <Route exact={true} path="/userinfo" component={UserInfo} />
       <Route exact={true} path="/userpost" component={UserPost} />
       <Route exact={true} path="/" component={Initial} />
     </Switch>
     </BrowserRouter>
  );
}

export default App;
