import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import {Grid,Card,CardContent, TextField,Fab} from '@material-ui/core'
import Header from '../../Helpers/header';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { attemptLogin, login } from '../../Redux/Actions/login'
import * as Utils from '../../Helpers/util';


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

     state = {
          email : "",
          password : "",
          errors : {
               emailErrorText : "",
               passwordErrorText : ""
          }
     }
     getInitialErrorState(){
          return {
               emailErrorText : "",
               passwordErrorText : ""
          }
     }
     handleChange = (e) => {
          this.setState( {   [ e.target.name] : e.target.value  } );
     }
     validate () {
          const {email,password} = this.state;
          let errors = this.getInitialErrorState();
          let isValid = true;

          if( !email.length ){
               isValid = false;
               errors['emailErrorText'] = "Please enter email address."
          }
          if(email.length){
               if( !Utils.testEmailPattern(email)){
                    isValid = false;
                    errors['emailErrorText'] = "Please enter valid Email Address."
               }
               
          }
          if( !password.length ){
               isValid = false;
               errors['passwordErrorText'] = "Please enter your password";
          }

          this.setState({  errors  });
          return isValid;
     }
     handleSubmit = (e) => {
          if(this.validate()){
               this.props.attemptLogin();
               this.props.login();
          }
     }
     render() {
          const {classes} = this.props;
          const { email,password,errors } = this.state;
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
                                                  name="email"
                                                  label="Email"
                                                  margin="normal"
                                                  value={email}
                                                  onChange={this.handleChange}
                                                  error={errors.emailErrorText.length ? true : false}
                                                  required={true}
                                                  helperText= {errors.emailErrorText}
                                        />
                                        <TextField
                                                  fullWidth
                                                  id="loginPassword"
                                                  type="password"
                                                  name="password"
                                                  label="Password"
                                                  margin="normal"
                                                  value={password}
                                                  onChange={this.handleChange}
                                                  error={errors.passwordErrorText.length ? true : false}
                                                  required ={true}
                                                  helperText= {errors.passwordErrorText}
                                        />
                                        <Fab variant="extended" color="secondary" aria-label="Delete" className={classes.fab} onClick={()=>this.handleSubmit()}>
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

Login.propTypes = {
     classes: PropTypes.object.isRequired,
}
const mapStateToProps = (state,ownProps) => ({
     result : state.login.result,
     isAuthenticated : state.login.isAuthenticated,
     isAuthenticating : state.login.isAuthenticating
})

export default connect( mapStateToProps, { attemptLogin,login } )( withStyles(loginFormStyles)(Login) )
