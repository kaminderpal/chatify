import {FORGOTPWD_SUCCESS,FORGOTPWD_STARTED,FORGOTPWD_FAIL} from '../Actions/types';

export default function( state = { 
                                   isAuthenticating : false ,
                                   isAuthenicated : false,
                                   errorMessage : ""
                              }, action )
{
     switch (action.type){
          case FORGOTPWD_STARTED : 
               return { ...state , isAuthenticating : true };
          case FORGOTPWD_SUCCESS : //#endregion
               return { ...state, result : action.payload, isAuthenticated : true , isAuthenticating : false,errorMessage : "" }
          case FORGOTPWD_FAIL :
               return { ...state, result : [], errorMessage : action.payload.message, isAuthenticated : false , isAuthenticating : false }
          default : 
               return true;
     } 
}