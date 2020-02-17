import React, {Component} from 'react';
import {Button,Icon,Modal} from 'antd'
import screenfull from 'screenfull'
import dayjs from 'dayjs'
import {connect} from 'react-redux'
import {reqWeather} from '../../api'
import {createDeleteUserInfoAction} from '../../redux/actions/login'
import './header.less'
const {confirm} = Modal;

@connect(
    (state)=>({userInfo:state.userInfo}),
    {deleteUserInfo:createDeleteUserInfoAction}
)
class Header extends Component{
    //通过标识位isFull来判断，实现全屏/退出全屏切换功能
    state = {
        isFull:false,//是否退出全屏
        date:dayjs().format('YYYY年 MM月 DD日 HH:mm:ss'),//当前时间
        weatherData:{pic:'',temp:''}
    }
    
    //全屏切换功能
    fullscreen = ()=>{
      screenfull.toggle();
    }
    //退出登录
    exit = ()=>{
      confirm({
          titel:'确定退出么',
          content:'退后需要重要登录',
          okText:'确定',
          cancelText:'取消',
          onOk:()=>{
            this.props.deleteUserInfo();
          }
      })
    }
    //获取天气数据
    getWeatherData = async()=>{
		//发送ajax请求获取天气数据
		let weatherData = await reqWeather()
		const {temperature,dayPictureUrl} = weatherData
		this.setState({weatherData:{pic:dayPictureUrl,temp:temperature}})
	}

    //componentDidMount钩子
   componentDidMount(){
        //检测全屏变化
        screenfull.on('change',()=>{
            const isFull = !this.state.isFull;
            console.log(isFull)
            this.setState({isFull})
        })
        //更新时间
        this.timeId = setInterval(() => {
            this.setState({date:dayjs().format('YYYY年 MM月 DD日 HH:mm:ss')})
        }, 1000);

        //发送ajax请求天气数据
        //调用getWeatherData，获取天气信息
		this.getWeatherData()

    }


    //componentWillUnmount钩子
    componentWillUnmount(){
        clearInterval(this.timeId)
    }

    render(){
        const {username} = this.props.userInfo.user;
        return (
            <div className="header">
				<div className="header-top">
					<Button size="small" onClick={this.fullscreen}>
                    <Icon type={this.state.isFull ? 'fullscreen-exit' : 'fullscreen'}/>
					</Button>
					<span>欢迎，{username}</span>
					<Button type="link" onClick={this.exit}>退出登录</Button>
				</div>
				<div className="header-bottom">
					<div className="bottom-left">
						<span>首页</span>
					</div>
					<div className="bottom-right">
						<span>{this.state.date}</span>
						<img src={this.state.weatherData.pic} alt="天气图标"/>
						<span>温度：{this.state.weatherData.temp}</span>
					</div>
				</div>
			</div>
        )
    }
}
export default Header