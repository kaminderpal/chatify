import { RESETPWD_SUCCESS,RESETPWD_STARTED,RESETPWD_FAIL } from './types';
import axios from 'axios';
import {API} from '../../Helpers/api';


export const attemptResetPwd  = () => dispatch => {
    dispatch({
         type : RESETPWD_STARTED
    });
};

export const resetPwd = (data) => dispatch => {
    axios.post(API.URL_RESETPWD,data)
     .then( user => dispatch({
          type : RESETPWD_SUCCESS,
          payload : user,
     }))
     .catch(error => dispatch({
          type : RESETPWD_FAIL
     }));

}