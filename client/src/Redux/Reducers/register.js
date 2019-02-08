import { REGISTER_SUCCESS,REGISTER_STARTED,REGISTER_FAIL } from '../Actions/types';

export default function( state = { 
                                   isRegistering : false ,
                                   isRegistered : false,
                                   errorMessage : ""
                              }, action )
{
     switch (action.type){
          case REGISTER_STARTED : 
               return { ...state , isRegistering : true };
          case REGISTER_SUCCESS : //#endregion
               return { ...state, result : action.payload, isRegistered : true , isRegistering : false }
          case REGISTER_FAIL :
               return { ...state, result : [], errorMessage : action.payload.message, isRegistered : false , isRegistering : false }
          default : 
               return true;
     } 
}