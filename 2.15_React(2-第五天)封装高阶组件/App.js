import React, { Component } from 'react'
import Demo from './containers/demo/demo'
import Check from './containers/check/check'

export default class App extends Component{
	render(){
		let NewDemo = Check(Demo)
		return (
			<div>
				<NewDemo style={{color:"#fff",background:'skyblue',padding:'5px 15px',display:'inline-block'}} />
			</div>
		)
	}

}
