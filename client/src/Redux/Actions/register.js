import { REGISTER_SUCCESS,REGISTER_STARTED,REGISTER_FAIL } from './types';
import axios from 'axios';
import {API} from '../../Helpers/api';


export const attemptRegister = () => dispatch => {
    dispatch({
         type : REGISTER_STARTED
    });
};

export const register = (data) => dispatch => {
    axios.post(API.URL_REGISTER,data)
     .then( user => dispatch({
          type : REGISTER_SUCCESS,
          payload : user,
     }))
     .catch(error => dispatch({
          type : REGISTER_FAIL
     }));
}