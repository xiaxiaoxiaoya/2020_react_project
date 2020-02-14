//这个文件用于来汇总reducers
import loginReducer from './login';
import {combineReducers} from 'redux';//combinReducers()方法用于汇总reducer

export default combineReducers({
    userInfo:loginReducer
})