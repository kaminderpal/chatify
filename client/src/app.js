/**
 * In this class we setup redux as state management for our app.
 */

import React, { Component,Fragment } from 'react';
import Router from './router';
import { Provider } from 'react-redux';
import store from './store';
export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Router/>
        </Fragment>
      </Provider>
    )
  }
}

export default App
