import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Admin extends Component{
    render(){
        //判断isLogin的值，如果 为false则代表之前没有登录过，如果直接打开admin页面，让他直接跳转到login页面
        //但是，走完判断之后，return下边的代码还是会往下走，因此跳转页面可以借助Redirect重定向。
        const {isLogin} = this.props.userInfo;
        if(!isLogin){
            // this.props.history.replace('/login');
            return <Redirect to='/login'/>
        }
        return <h2>欢迎登录，{this.props.userInfo.user.username}</h2>
        }
}
export default connect(
    (state)=>({userInfo:state.userInfo}),//映射状态
    {},//映射操作状态的方法
    
)(Admin)