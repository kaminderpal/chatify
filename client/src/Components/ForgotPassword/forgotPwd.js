import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Grid,Card,CardContent, TextField,Fab,Typography} from '@material-ui/core'
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import { attemptForgotPwd, submitForgotPwd } from '../../Redux/Actions/forgotPwd'
import * as Utils from '../../Helpers/util';
import green from '@material-ui/core/colors/green';
import Header from '../header';

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
export class ForgotPwd extends Component {
    state = {
        email : "",
        errors : this.getInitialState()
    }
    getInitialState() {
        return { emailErrorText : "" }
    }
    handleChange = (e) => {
        this.setState( {   [ e.target.name] : e.target.value  } );
    }
    handleError = (error) => {
        return !error ? false : true
    }
    handleSubmit = (e) => {
        if(this.validate()){
             this.props.attemptForgotPwd();
             this.props.submitForgotPwd( { email : this.state.email } );
        }
    }
    validate(){
        const {email,errors} = this.state;
        let isValid = true;
        if( !email.length ){
            isValid = false;
            errors['emailErrorText'] = "Please enter email address."
        }
        if(email.length){
            if(!Utils.testEmailPattern(email)){
                isValid = false;
                errors['emailErrorText'] = "Please enter valid Email Address."
            }
        }
        this.setState({  errors  });
        return isValid;
    }

  render() {
    const {classes,isAuthenticating,errorMessage,successMessage} = this.props;
    const {email,errors} = this.state;
    return (
      <Grid container={true} direction="row" justify="center" alignItems="center" className={classes.root}>
        <Grid item xs={12} sm={8} md={6} lg={4}> 
            <Card className={classes.card} raised={true}>
                <CardContent className={classes.formCardContent} >
                    <Header variant="h4" color="inherit"> Forgot Password </Header>
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
                        <Typography component="p" align="left"  className={ `${classes.errorWrapper}  ${ ()=>this.handleError(successMessage)  ? classes.displayBlock : classes.displayNone }`  } color="secondary"> { successMessage }  </Typography>
                        <Typography component="p" align="left"  className={ `${classes.errorWrapper}  ${ ()=>this.handleError(errorMessage)  ? classes.displayBlock : classes.displayNone }`  } color="secondary"> { errorMessage }  </Typography>
                        <Fab variant="extended" color="secondary" disabled={isAuthenticating} aria-label="Delete" className={classes.fab} onClick={()=>this.handleSubmit()}>
                               Submit  { isAuthenticating && <CircularProgress size={24} className={classes.buttonProgress} />}
                        </Fab>
                    </form>

                </CardContent>
            </Card>
        </Grid>
    </Grid>
    )
  }
}
ForgotPwd.propTypes = {
    classes: PropTypes.object.isRequired,
}
const mapStateToProps = (state,ownProps) => ({
    result : state.forgotPwd.result,
    isAuthenticated : state.forgotPwd.isAuthenticated,
    isAuthenticating : state.forgotPwd.isAuthenticating,
    errorMessage : state.forgotPwd.errorMessage,
    successMessage : state.forgotPwd.successMessage
})

export default connect( mapStateToProps, { attemptForgotPwd, submitForgotPwd } )( withStyles(styles)(ForgotPwd) )
