/**
 * In this class we setup redux as state management for our app.
 * Also, init material ui theme
 */

import React, { Component,Fragment } from 'react';
import Router from './router';
import { Provider } from 'react-redux';
import store from './store';
import {withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faDesktop, faChartBar,faGlobeAmericas,faShoppingCart,faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF,faTwitter,faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons' 
// import {LinearProgress} from '@material-ui/core';
library.add(fab,faDesktop, faChartBar,faGlobeAmericas,faShoppingCart,faQuoteLeft,faFacebookF,faTwitter,faInstagram,faYoutube );


const theme = createMuiTheme({
  palette: {
    primary: {
              main : "#2196f3"
          }
  },
  typography: {
    useNextVariants: true,
    h4 : {
      fontFamily : "adobe-garamond-pro",
      color : "#ffffffd9"
    },
    h5 : {
     fontFamily : "adobe-garamond-pro",
     color : "#ffffffd9"
   },
    h6 : {
     fontFamily : '"proxima-nova",proxima-nova',
     lineHeight : 1.3,
    }
  }
});

const styles =  {
                  '@global' : {
                                'html,body,#root' : {
                                  height : '100%'
                                }
                  }
};

export class App extends Component {
  render() {
    return (
      <Provider store={store}> 
        <MuiThemeProvider theme={theme}>
            <Fragment>
              <CssBaseline/>
              <Router/>
            </Fragment>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default withStyles(styles)(App)
