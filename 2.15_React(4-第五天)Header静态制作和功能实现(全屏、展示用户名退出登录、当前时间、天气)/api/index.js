//此文件用于统一管理保存所有发送的ajax请求。项目中所有的ajax请求，都需要在此文件中准备一个请求函数。
import myAxios from './myAxios';
import {WEATHER_BASE_URL,WEATHER_AK} from '../config'
import {message} from 'antd'
import jsonp from 'jsonp'
//发送登录请求的  ----这里写法不正确会影响，login.jsx中的result的结果
export const reqLogin = (username,password)=>{
    return myAxios.post('/login',{username,password})
}

//简写方式
// export const reqLogin = (username,password) => myAxios.post('/login',{username,password})

//请求天气接口
export const reqWeather = () => {
	const url = `${WEATHER_BASE_URL}?location=北京&output=json&ak=${WEATHER_AK}`
	return new Promise((resolve,reject)=>{
		jsonp(url,(err,data)=>{
			if(!err){
				const {temperature} = data.results[0].weather_data[0]
				const {dayPictureUrl} = data.results[0].weather_data[0]
				const weatherObj = {temperature,dayPictureUrl}
				resolve(weatherObj)
			}else{
				message.error('请求天气数据失败，请联系管理员')
			}
		})
	})
}
