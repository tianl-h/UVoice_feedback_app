/*
* @Author: tianl
* @Date:   2021-03-16 22:24:13
* @Last Modified by:   tianl
* @Last Modified time: 2021-03-18 00:14:52
*/
import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);

    dispatch({ type: FETCH_USER, payload: res.data });
};
