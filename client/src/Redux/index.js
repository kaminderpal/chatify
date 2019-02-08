import { combineReducers } from 'redux';
import loginReducer from './Reducers/login'
import registerReducer from "./Reducers/register";
export default combineReducers({
     login : loginReducer,
     register : registerReducer
});