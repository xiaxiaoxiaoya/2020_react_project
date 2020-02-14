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