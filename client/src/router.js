import React, { Component,Fragment } from 'react'
import { Route,Switch } from 'react-router-dom'
import Home from './Containers/Home/home'


export class Router extends Component {
  render() {
    return (
      <Fragment>
           <Switch>
                <Route path="/" exact component={Home}  />
           </Switch>
      </Fragment>
    )
  }
}

export default Router
