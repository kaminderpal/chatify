import { combineReducers } from 'redux';
import loginReducer from './Reducers/login'
import registerReducer from "./Reducers/register";
import forgotPwd from './Reducers/forgotPwd';


export default combineReducers({
     login : loginReducer,
     register : registerReducer,
     forgotPwd : forgotPwd
});