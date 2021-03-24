/*
* @Author: tianl
* @Date:   2021-03-16 20:46:10
* @Last Modified by:   tianl
* @Last Modified time: 2021-03-24 11:03:55
*/

import { combineReducers } from 'redux';
import { reducer as reduxForm} from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';

export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    surveys: surveysReducer
});
