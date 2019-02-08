import React, { Component,Fragment } from 'react'
import { Route,Switch } from 'react-router-dom'
import Home from './Containers/Home/home'
import Register from './Components/Register/register'
import  Login from './Components/Login/login';
import ForgotPwd from './Components/ForgotPassword/forgotPwd';

export class Router extends Component {
  render() {
    return (
      <Fragment>
           <Switch>
                <Route path="/" exact component={Home}  />
                <Route path="/register" exact component={Register}  />
                <Route path="/login" exact component={Login}  />
                <Route path="/forgotpassword" exact component={ForgotPwd}  />
           </Switch>
      </Fragment>
    )
  }
}

export default Router
