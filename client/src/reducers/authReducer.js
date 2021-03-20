/*
* @Author: tianl
* @Date:   2021-03-16 20:45:48
* @Last Modified by:   tianl
* @Last Modified time: 2021-03-16 23:24:30
*/

import { FETCH_USER } from '../actions/types';
export default function(state = null, action) {
    // console.log(action);
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
}