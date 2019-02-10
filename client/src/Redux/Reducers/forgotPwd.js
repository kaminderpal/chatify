import {FORGOTPWD_SUCCESS,FORGOTPWD_STARTED,FORGOTPWD_FAIL} from '../Actions/types';

export default function( state = { 
                                   isAuthenticating : false ,
                                   isAuthenicated : false,
                                   errorMessage : "",
                                   sucessMessage : ""
                              }, action )
{
     switch (action.type){
          case FORGOTPWD_STARTED : 
               return { ...state , isAuthenticating : true };
          case FORGOTPWD_SUCCESS : //#endregion
               return { ...state, 
                         result : action.payload, 
                         isAuthenticated : true , 
                         isAuthenticating : false,
                         errorMessage : "",
                         successMessage : "Please check your email for reset password link." 
                    }
          case FORGOTPWD_FAIL :
               return { ...state, result : [], 
                         errorMessage : action.payload.message, 
                         isAuthenticated : false , 
                         isAuthenticating : false,
                         successMessage :""
                     }
          default : 
               return true;
     } 
}