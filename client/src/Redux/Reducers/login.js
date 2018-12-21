import {LOGIN_SUCCESS,LOGIN_STARTED,LOGIN_FAIL} from '../Actions/types';

export default function( state = { 
                                   isAuthenticating : false ,
                                   isAuthenicated : false
                              }, action )
{
     switch (action.type){
          case LOGIN_STARTED : 
               return { ...state , isAuthenticating : true  };
          case LOGIN_SUCCESS : //#endregion
               return { ...state, result : action.payload, isAuthenticated : true , isAuthenticating : false }
          case LOGIN_FAIL :
               return { ...state, result : [], isAuthenticated : false , isAuthenticating : false }
          default : 
               return true;
     } 
}