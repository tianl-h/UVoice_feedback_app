/*
* @Author: tianl
* @Date:   2021-03-24 11:00:51
* @Last Modified by:   tianl
* @Last Modified time: 2021-03-24 11:18:34
*/
import { FETCH_SURVEYS } from '../actions/types';

export default function(state = [], action) {
 switch (action.type) {
    case FETCH_SURVEYS:
        return action.payload;
    default:
        return state;
 }
}