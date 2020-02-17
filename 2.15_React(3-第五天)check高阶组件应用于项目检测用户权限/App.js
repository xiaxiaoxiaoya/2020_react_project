import React, { Component } from 'react'
import Admin from './containers/admin/admin';
import Login from './containers/login/login';
import {Switch,Route,Redirect} from 'react-router-dom';



export default class App extends Component{
	render(){
		return (
			<Switch>
				<Route path='/admin' component={Admin}></Route>
				<Route path='/login' component={Login}></Route>
				<Redirect to='/login' />
			</Switch>
		)
	}

	
}

//情况1：装饰器没有返回值：
// function demo(target) {
// 	target.a=1;
// 	target.b=2;
// }
// @demo
// class MyClass{}
//以上会被翻译为下列代码
// class MyClass{}
// demo(MyClass)
//console.log(MyClass.a,MyClass.b)

//情况2：装饰器有返回值
// function demo (target){
// 	target.a=1;
// 	return '哈哈'
// }
// @demo 
// class MyClass{}
//以上装饰器语法代码被翻译为：
// class MyClass{}
// MyClass = demo(MyClass)
// console.log(MyClass)


//情况3：装饰器函数是另外一个函数的返回值 
// function test (){
// 	function demo (target){
// 		target.a=1
// 		target.b=2
// 	}
// 	return demo;
// }

// let obj={m:1}
// test()(obj)
// console.log(obj)
// @test()
// class MyClass{}
// console.log(MyClass.a,MyClass.b)
//以上代码可翻译为：
// class MyClass{}
// test()(MyClass)
// console.log(MyClass.b)