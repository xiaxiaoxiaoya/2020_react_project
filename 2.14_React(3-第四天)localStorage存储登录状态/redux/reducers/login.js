//reducer肯定是用来加工状态的啦。

import {SAVE_USERINFO} from '../action_types'
//初始化一个的信息
/* 
初始化用户信息的时候，尝试读取locastorage中的信息。
虽然已经在locastorage存储了用户信息，但是因为我们只读取了redux的信息，页面一刷新，还是会看不到用户信息。因此我们应该让
redux读取localStorage中的信息。现下有两种情况：
1、读取到了，用户登录过了，用读取出来的数据初始化redux保存的state;
2、未读取用，用户没有登录过，或登录过，但手动清空了localstorage中的数据，初始化一个空的用户信息
*/

const user = JSON.parse(localStorage.getItem('user'));//因为读取出来的是字符串，因此需转成对象格式
const token = localStorage.getItem('token');
let initState;
if(user && token){
    initState = {
        user:user,
        token:token
    }
}else{
    initState = {
        user:{},
        token:''
    }
}

//简化写法
// let initState = {
//     user:_user || {},
//     token:_token || 
// }


// let initState = {
//     user:{},
//     token:''
// }

//开始加工状态
export default function (preState=initState,action){
    console.log(action)
    const {type,data} = action;
    let newState;
    switch (type) {
        case SAVE_USERINFO:
             const {user,token} = data;
             newState = {user,token}
             return newState;
    
        default:
            return preState;
    }
}