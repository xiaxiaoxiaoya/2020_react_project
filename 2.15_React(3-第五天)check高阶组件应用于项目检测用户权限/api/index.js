//此文件用于统一管理保存所有发送的ajax请求。项目中所有的ajax请求，都需要在此文件中准备一个请求函数。
import myAxios from './myAxios';

//发送登录请求的  ----这里写法不正确会影响，login.jsx中的result的结果
export const reqLogin = (username,password)=>{
    return myAxios.post('/login',{username,password})
}

//简写方式
// export const reqLogin = (username,password) => myAxios.post('/login',{username,password})