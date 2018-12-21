import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import {Grid,Card,CardContent, TextField,Fab} from '@material-ui/core'
import Header from '../../Helpers/header';
import PropTypes from 'prop-types';


const loginFormStyles = theme => ({
     root : {
          flexGrow : 1,
          height : '100%'
     },
     card : {
          boxShadow : theme.shadows[10]
     },
     form : {
          display :'flex',
          flexDirection :'column',
          alignItems : 'center'
     },
     fab: {
          marginTop: theme.spacing.unit * 5,
          marginBottom : theme.spacing.unit *2,
          width : '40%'
     },
     buttonProgress :{
          color: theme.palette.primary.main,
          position: 'absolute',
          top: '50%',
          left: '50%',
          marginTop: -12,
          marginLeft: -12,
     },
     formCardContent :{
          padding : '2rem !important',
          [theme.breakpoints.down('xs')] : {
               padding : '1rem !important',
          }
     },
});


export class Login extends Component {
  render() {
     const {classes} = this.props;
     return (
          <Grid container={true} direction="row" justify="center" alignItems="center" className={classes.root}>
               <Grid item xs={12} sm={8} md={6} lg={4}> 
                    <Card className={classes.card} raised={true}>
                         <CardContent className={classes.formCardContent} >
                              <Header variant="h4" color="inherit"> Login </Header>
                              <form  className={classes.form} >
                                   <TextField
                                             fullWidth
                                             id="loginEmail"
                                             type="email"
                                             label="Email"
                                             margin="normal"
                                   />
                                   <TextField
                                             fullWidth
                                             id="loginPassword"
                                             type="password"
                                             label="Password"
                                             margin="normal"
                                   />
                                   <Fab variant="extended" color="secondary" aria-label="Delete" className={classes.fab} >
                                        Login
                                   </Fab>
                              </form>
                         </CardContent>
                    </Card>
               </Grid>
          </Grid>
    )
  }
}

export default withStyles(loginFormStyles)(Login)
