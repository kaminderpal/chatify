import React, { Component,Fragment } from 'react'
import { Route,Switch } from 'react-router-dom'
import Home from './Containers/Home/home'
import Register from './Components/Register/register'

export class Router extends Component {
  render() {
    return (
      <Fragment>
           <Switch>
                <Route path="/" exact component={Home}  />
                <Route path="/register" exact component={Register}  />
           </Switch>
      </Fragment>
    )
  }
}

export default Router
