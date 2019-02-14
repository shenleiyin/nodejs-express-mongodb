/**
 * combineReducers
 * 将多个reducer合成一个大的Reducer
 * 
 * 
 */
import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'


export default combineReducers({
    auth: authReducer,
    errors: errorReducer
})