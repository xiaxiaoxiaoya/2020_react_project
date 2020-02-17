import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {createDeleteUserInfoAction} from '../../redux/actions/login'

@connect(
    (state)=>({userInfo:state.userInfo}),//映射状态
    {deleteUserInfo:createDeleteUserInfoAction},//映射操作状态的方法
)
class Admin extends Component{
    //点击退出登录事件
    exit = ()=>{
      //输入函数体 1、清空localstorage 2、清空redux
     this.props.deleteUserInfo();
      
    }

    render(){
        //判断isLogin的值，如果 为false则代表之前没有登录过，如果直接打开admin页面，让他直接跳转到login页面
        //但是，走完判断之后，return下边的代码还是会往下走，因此跳转页面可以借助Redirect重定向。
        const {isLogin} = this.props.userInfo;
        if(!isLogin){
            // this.props.history.replace('/login');
            return <Redirect to='/login'/>
        }
        return (
            <div>
                <h2>欢迎登录，{this.props.userInfo.user.username}</h2>
                <button onClick = {this.exit}>退出登录</button>
            </div>
        )
        }
}
export default Admin