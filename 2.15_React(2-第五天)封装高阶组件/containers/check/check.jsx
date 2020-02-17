import React, { Component } from 'react'

 /* 
    高阶组件：符合一个高阶组件：1、可以接收一个组件；2、返回一个新组件，那就是高阶组件
*/
	
export default function (ReceiveCompnent) {//可以接收一个组件
    class NewComponent extends Component{//定义一个组件
        render(){
            // console.log(this.props.style.color)
            // const {style} = this.props.style.color
            return (
                <div>
                    <h1 {...this.props}>hellow，xiaxiaoxiaya</h1>
                    {/* 使用这个接收组件，并在组件上新添加一个内容为hellow，xiaxiaoxiaya的h1标签 */}
                    <ReceiveCompnent />
                </div>
            )
        }
    }
    return NewComponent;//返回一个新的组件
}