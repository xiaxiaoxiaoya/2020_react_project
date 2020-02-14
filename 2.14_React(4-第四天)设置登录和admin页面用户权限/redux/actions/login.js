//创建action
import {SAVE_USERINFO} from '../action_types';

export const createSaveUserInfoAction = (personObj)=>{
  //向localstorage中保存用户信息，目的是防止刷新后redux数据丢失
  /* 
    因为在提交ajax请求中尽量不写太多逻辑代码，因此在创建action的同时，向localstorage保存用户信息。
  */
 const {user,token} = personObj;
 //设置添加用户信息到localstorage
 localStorage.setItem('user',JSON.stringify(user));//因为localStorage中的就是以key.value的字符串形式存在的。
 localStorage.setItem('token',token);//token本身就是字符串，因此不再用JSON.stringify()方法
  //输入函数体
  return {type:SAVE_USERINFO,data:personObj}
}
