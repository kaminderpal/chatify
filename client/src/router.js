import React, { Component,Fragment,Suspense,lazy } from 'react'
import { Route,Switch } from 'react-router-dom'

const Home = lazy(() => import('./Containers/Home/home') );
const Login = lazy(() => import('./Components/Login/login') );
const Register = lazy(() => import('./Components/Register/register') );
const ForgotPwd = lazy(() => import('./Components/ForgotPassword/forgotPwd') );
const ResetPwd = lazy(() => import('./Components/ResetPassword/resetPwd') );

export class Router extends Component {
  render() {
    return (
      <Fragment>
          <Suspense fallback={<div>Loading...</div>}>
           <Switch>
                <Route path="/" exact render={()=><Home/>}  />
                <Route path="/register" exact render={()=><Register/>}  />
                <Route path="/login" exact render={()=><Login/>} />
                <Route path="/forgotpassword" exact render={()=><ForgotPwd/>}  />
                <Route path="/resetpassword/:email/:token" exact render={()=><ResetPwd/>} />
           </Switch>
           </Suspense>
      </Fragment>
    )
  }
}

export default Router
