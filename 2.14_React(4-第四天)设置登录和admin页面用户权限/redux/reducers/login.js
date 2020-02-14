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

const _user = JSON.parse(localStorage.getItem('user'));//因为读取出来的是字符串，因此需转成对象格式
const _token = localStorage.getItem('token');
// let initState;
// if(user && token){
//     initState = {
//         user:user,
//         token:token
//     }
// }else{
//     initState = {
//         user:{},
//         token:''
//     }
// }

//简化写法
let initState = {
    user:_user || {},
    token:_token || '',
    //限制用户登录页面和admin的权限控制
    /* 
    思路：在渲染admin之前，读取redux中的状态，如果有就表示登录，反之，没有登录。
    1、在redux中初始化状态添加一个标识位
    */
    isLogin:(_user && _token) ? true :false
}


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
             //如果有user和token,那么必须是登录过了。
             newState = {user,token,isLogin:true}
             return newState;
    
        default:
            return preState;
    }
}