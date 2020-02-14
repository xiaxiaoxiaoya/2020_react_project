//reducer肯定是用来加工状态的啦。

import {SAVE_USERINFO} from '../action_types'
//初始化一个的信息
let initState = {
    user:{},
    token:''
}

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