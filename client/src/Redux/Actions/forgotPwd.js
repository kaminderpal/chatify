import { FORGOTPWD_SUCCESS,FORGOTPWD_STARTED,FORGOTPWD_FAIL } from './types';
import axios from 'axios';
import {API} from '../../Helpers/api';


export const attemptForgotPwd = () => dispatch => {
     dispatch({
          type : FORGOTPWD_STARTED
     });
};

export const submitForgotPwd = (data) => dispatch => {
     axios.post(API.URL_FORGOTPWD,data)
     .then( user => dispatch({
          type : FORGOTPWD_SUCCESS,
          payload : user,
     }))
     .catch(error => dispatch({
          type : FORGOTPWD_FAIL,
          payload : error.response.data
     }));
}