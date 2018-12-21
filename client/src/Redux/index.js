import { combineReducers } from 'redux';
import loginReducer from './Reducers/login'

export default combineReducers({
     login : loginReducer
});