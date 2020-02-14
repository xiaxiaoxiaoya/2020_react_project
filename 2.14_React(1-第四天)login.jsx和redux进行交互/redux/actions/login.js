//创建action
import {SAVE_USERINFO} from '../action_types';

export const createSaveUserInfoAction = (personObj)=>{
  //输入函数体
  return {type:SAVE_USERINFO,data:personObj}
}
