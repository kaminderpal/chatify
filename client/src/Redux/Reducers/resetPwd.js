import {RESETPWD_SUCCESS,RESETPWD_STARTED,RESETPWD_FAIL} from '../Actions/types';

export default function( state = { 
                                   isReseting : false ,
                                   isReseted : false,
                                   errorMessage : "",
                                   successMessage : ""
                              }, action )
{
     switch (action.type){
          case RESETPWD_STARTED : 
               return { ...state , isReseting : true };
          case RESETPWD_SUCCESS : //#endregion
               return { ...state, 
                         result : action.payload, 
                         isReseted : true, 
                         isReseting : false,
                         successMessage : "Password has been successfully changed. " 
                    }
          case RESETPWD_FAIL :
               return { ...state, result : [], 
                         errorMessage : action.payload.message, 
                         isReseted : false , 
                         isReseting : false
                     }
          default : 
               return true;
     } 
}