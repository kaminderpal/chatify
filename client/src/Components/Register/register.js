import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {Grid,Card,CardContent, CardActions,TextField,Fab,Typography} from '@material-ui/core'
import Header from '../../Helpers/header';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as Utils from '../../Helpers/util';
import { connect } from 'react-redux';
import { attemptRegister, register } from '../../Redux/Actions/register';




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
     cardAction : {
          padding : '1.5rem',
          paddingTop:0,
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


export class Register extends Component {
     state = {
          username :  "",
          email : "",
          password : "",
          confirmPassword : "",
          errors : this.getInitialErrorState()
     }
     getInitialErrorState(){
          return {
               usernameErrorText : "",
               emailErrorText : "",
               passwordErrorText : "",
               confirmPasswordErrorText : ""
          }
     }
     handleSubmit = (e) => {
          if(this.validate()){
               // this.props.attemptLogin();
               // this.props.login( { "email" : this.state.email,"password" : this.state.password } );
          }
     }
  render() {
       const {classes,isRegistering,errorMessage} = this.props;
       const {email,password,username,confirmPassword,errors} = this.state;
    return (
     <Grid container={true} direction="row" justify="center" alignItems="center" className={classes.root}>
     <Grid item xs={12} sm={8} md={6} lg={4}> 
          <Card className={classes.card} raised={true}>
               <CardContent className={classes.formCardContent} >
                    <Header variant="h4" color="inherit"> Register </Header>
                    <form  className={classes.form} >
                          <TextField
                                   fullWidth
                                   id="username"
                                   type="text"
                                   name="username"
                                   label="Username"
                                   margin="normal"
                                   value={username}
                                   onChange={this.handleChange}
                                   error={errors.usernameErrorText.length ? true : false}
                                   required={true}
                                   helperText= {errors.usernameErrorText}
                         />
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
                         <Typography component="p" align="left"  className={ `${classes.errorWrapper}  ${ ()=>this.handleError(errorMessage)  ? classes.displayBlock : classes.displayNone }`  } color="secondary"> { errorMessage }  </Typography>
                         <Fab variant="extended" color="secondary" disabled={isRegistering} aria-label="Delete" className={classes.fab} onClick={()=>this.handleSubmit()}>
                              Register  { isRegistering && <CircularProgress size={24} className={classes.buttonProgress} />}
                         </Fab>
                    </form>
               </CardContent>
               <CardActions className={classes.cardAction}>
                    <Typography variant="body1" className={classes.cardActionP}> Already member, Please </Typography> 
                    <Typography component={NavLink} variant="body1" to="/login" > Login </Typography>
               </CardActions>
          </Card>
     </Grid>
</Grid>
    )
  }
}

Register.propTypes = {
     classes : PropTypes.object.isRequired
};
const mapStateToProps = (state,ownProps) => ({
     result : state.register.result,
     isRegistered : state.register.isRegistered,
     isRegistering : state.register.isRegistering,
     errorMessage : state.register.errorMessage
})
//connect props to redux dispatchers.
export default connect( mapStateToProps, { attemptRegister, register  } )( withStyles(styles)(Register) )