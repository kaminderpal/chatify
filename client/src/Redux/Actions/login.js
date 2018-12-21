import { LOGIN_SUCCESS,LOGIN_STARTED,LOGIN_FAIL } from './types';
import axios from 'axios';
import {API} from '../../Helpers/api';


export const attemptLogin = () => dispatch => {
     dispatch({
          type : LOGIN_STARTED
     });
};

export const login = (data) => dispatch => {
     axios.post(API.URL_LOGIN,data)
     .then( user => dispatch({
          type : LOGIN_SUCCESS,
          payload : user,
     }))
     .catch(error=> dispatch({
          type : LOGIN_FAIL
     }));
}