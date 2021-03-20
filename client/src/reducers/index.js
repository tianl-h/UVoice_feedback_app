/*
* @Author: tianl
* @Date:   2021-03-16 20:46:10
* @Last Modified by:   tianl
* @Last Modified time: 2021-03-16 20:56:13
*/

import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer
});
