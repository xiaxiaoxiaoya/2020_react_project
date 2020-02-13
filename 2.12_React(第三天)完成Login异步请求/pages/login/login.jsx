import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import axios from 'axios';
import './css/login.less';
import logo from './img/logo.png';
//通过解构赋值，直接获取到Item上的Item,便于下边使用
const { Item } = Form;
class Login extends Component {
    //自定义校验密码:当密码输入后，都会调用函数去验证是否合法
    pwdValidator = (rule, value, callback) => {
        //输入函数体
        if (!value) {
            callback('密码必须输入');
        } else if (value.length > 12) {
            callback('密码必须小于等于12位');
        } else if (value.length < 4) {
            callback('密码必须大于等于4位');
        } else if (!(/^\w+$/).test(value)) {
            callback('密码必须是字母、数字、下划线组成')
        } else {
            callback()
        }


    }
    //点击提交按钮验证
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('网络请求成功，携带数据为: ', values);
                const {username,password} = values;
                //发送ajax请求  {username:username,password:password}这种json格式传参，因为服务器是设置的只能urlencoded,因此用下边这种方式
                axios.post('http://localhost:3000/login',`username=${username}&password=${password}`).then(
                    (response)=>{console.log(response.data)},
                    (error)=>{console.log(error)}
                )
            }
        });
    };
    //重写父类render
    render() {
        //获取this.props.form中的getFieldDecorator方法，但getFieldDecorator方法是如何获取到的?看最下边
        // console.log(this)
        const { getFieldDecorator } = this.props.form;

        return (
            <div id='login'>
                <header>
                    <img src={logo} alt="" />
                    <h1>商品管理系统</h1>
                </header>
                <div className='content'>
                    <h1>用户登录</h1>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                            {/* 声明式验证用户名 */}
                            {getFieldDecorator('username', {
                                rules: [
                                    { required: true, message: '用户名必须输入!' },
                                    { max: 12, message: '用户名必须小于等于12位' },
                                    { min: 4, message: '用户名必须大于等于4位' },
                                    { pattern: /^\w+$/, message: '用户名必须是英文、数字或下划线组成' },
                                ],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />,
                            )}
                        </Item>
                        <Item>
                            {getFieldDecorator('password', {
                                rules: [
                                    //使用自定义方式验证密码
                                    { validator: this.pwdValidator },
                                ],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="密码"
                                />,
                            )}
                        </Item>
                        <Item>

                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                        </Button>

                        </Item>
                    </Form>
                </div>
            </div>
        )
    }
}
//Form.create()返回值是一个函数，该函数接收一个组件，随后生成一个新的组件，即我们要渲染的那个新组件
//Form.create()返回的方法能够加工组件，生成的新组件多了一个特别重要的属性：form
//此处不再对外暴露Login,暴露由Form.create()方法返回的函数生成的那个新组件
export default Form.create()(Login)
//首先拿到我们的Login组件,传了一个没有form属性的组件，然后经过加工，返回了一个新的具有form属性的Login的组件并对外暴露