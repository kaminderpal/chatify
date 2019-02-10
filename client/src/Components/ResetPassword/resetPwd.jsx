import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Grid,Card,CardContent, TextField,Fab,Typography} from '@material-ui/core'
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import { attemptResetPwd,resetPwd } from '../../Redux/Actions/resetPwd'
import green from '@material-ui/core/colors/green';
import Header from '../header';
import { NavLink } from 'react-router-dom';
const styles = theme => ({
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
         alignItems : 'center',
         marginTop: '30px'
    },
    fab: {
         marginTop: theme.spacing.unit * 4,
         marginBottom : theme.spacing.unit *2,
         width : '40%'
    },
    buttonProgress :{
         color: green[500],
         position: 'absolute',
         top: '50%',
         left: '50%',
         marginTop: -12,
         marginLeft: -12,
    },
    formCardContent :{
         padding : '2rem',
         paddingBottom : '0rem',
         [theme.breakpoints.down('xs')] : {
              padding : '1rem !important',
         }
    },
    cardAction : {
         padding : '1.5rem',
         justifyContent : "center"
    },
    cardActionP :{
         marginRight : '5px'
    },
    errorWrapper : {
         marginTop : theme.spacing.unit * 2
    },
    displayBlock : {
         display : 'block'
    },
    displayNone : {
         display : 'none'
    }
 });




export class ResetPwd extends Component {
    state = {
         email : "",
         password : "",
         confirmPassword : "",
         token : "",
         errors : this.getInitialErrorState()
    }
    getInitialErrorState(){
     return {
               passwordErrorText : "",
               confirmPasswordErrorText : ""
          }
     }
     handleChange = (e) => {
          this.setState( {   [ e.target.name] : e.target.value  } );
     }
     handleSubmit = (e) => {
          if(this.validate()){
               this.props.attemptResetPwd();
               this.props.resetPwd( { "email" : this.state.email,"password" : this.state.password } );
          }
     }
     handleError = (error) => {
         return !error ? false : true
     }
     validate(){
          const {password,confirmPassword} = this.state;
          let errors = this.getInitialErrorState();
          let isValid = true;
          if( !password.length ){
               isValid = false;
               errors['passwordErrorText'] = "Please enter your password.";
          }
          if(password.length && password.length < 6){
               isValid = false;
               errors['passwordErrorText'] = "Please enter at least 6 characters for your password."
          }
          if(!confirmPassword.length){
               isValid = false;
               errors['confirmPasswordErrorText'] = "Please enter your confirm password."; 
          }
          if( password !== confirmPassword ){
               isValid = false;
               errors['confirmPasswordErrorText'] = "Password and Confirm passowrd doesn't match."
          }
          this.setState({  errors  });
          return isValid;
     }
     updateState = (email, token) => {
          return { email : decodeURIComponent(email) , token };
     }
     componentDidMount(){
          const { match : { params : { email , token } } } = this.props;
          this.setState(this.updateState(email,token));
     }
     render() {
          const {password,confirmPassword,errors,email} = this.state;
          const {classes,isReseting,errorMessage,successMessage} = this.props;
     
     return (
          <Grid container={true} direction="row" justify="center" alignItems="center" className={classes.root}>
          <Grid item xs={12} sm={8} md={6} lg={4}> 
          <Card className={classes.card} raised={true}>
               <CardContent className={classes.formCardContent} >
                    <Header variant="h4" color="inherit"> Reset Password </Header>
                    <form  className={classes.form} >
                         <TextField
                                   fullWidth
                                   id="loginEmail"
                                   type="email"
                                   name="email"
                                   label="Email"
                                   margin="normal"
                                   value={email}
                                   disabled = {true}
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
                         <TextField
                                   fullWidth
                                   id="confirmPassword"
                                   type="password"
                                   name="confirmPassword"
                                   label="Confirm Password"
                                   margin="normal"
                                   value={confirmPassword}
                                   onChange={this.handleChange}
                                   error={errors.confirmPasswordErrorText.length ? true : false}
                                   required ={true}
                                   helperText= {errors.confirmPasswordErrorText}
                         />
                         {
                              successMessage.length>0 && <Typography color="primary" component="div" variant="body1" align="left"  className={ classes.errorWrapper  } >  
                                                                 { successMessage } 
                                                                 <NavLink to="/login" color="primary" >Login</NavLink>  
                                                        </Typography>
                         }
                         {
                              errorMessage.length>0 && <Typography color="secondary" component="div" align="left"  className={ classes.errorWrapper } > 
                                                            { errorMessage }  
                                                       </Typography>
                         }
                         
                         <Fab variant="extended" color="secondary" disabled={isReseting} aria-label="Delete" className={classes.fab} onClick={()=>this.handleSubmit()}>
                              Submit  { isReseting && <CircularProgress size={24} className={classes.buttonProgress} />}
                         </Fab>
                    </form>

               </CardContent>
          </Card>
          </Grid>
     </Grid>
    )
  }
}

ResetPwd.propTypes = {
     classes : PropTypes.object.isRequired
}
const matchPropsToState = ( state, ownProps )=> ({
     result : state.resetPwd.result,
     isReseting : state.resetPwd.isReseting,
     isReseted : state.resetPwd.isReseted,
     errorMessage : state.resetPwd.errorMessage || "",
     successMessage : state.resetPwd.successMessage || ""
})


export default  connect(matchPropsToState, { attemptResetPwd, resetPwd } )(withStyles(styles)(ResetPwd));
