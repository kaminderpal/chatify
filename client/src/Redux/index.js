import { combineReducers } from 'redux';
import login from './Reducers/login'
import register from "./Reducers/register";
import forgotPwd from './Reducers/forgotPwd';
import resetPwd from './Reducers/resetPwd';



export default combineReducers({
     login,
     register, 
     forgotPwd, 
     resetPwd
});