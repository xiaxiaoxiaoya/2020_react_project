//该文件是通过axios拦截器对axios进行二次封装
import axios from 'axios';
import qs from 'querystring';
import {message} from 'antd';
//引入NProgress,用于实现进度条效果
import NProgress from 'nprogress';
//引入引入NProgress ，进度条的效果
import 'nprogress/nprogress.css'
//引入基本请求路径
import {BASE_URL} from '../config/index';
//axios配置明确的接口域名
axios.defaults.baseURL = BASE_URL;



//1、封装请求拦截器
axios.interceptors.request.use((config)=>{
  NProgress.start()
  //输入函数体
//   console.log(config)
const {method,data} = config;
if(method.toLowerCase()==='post' && data instanceof Object){
    config.data = qs.stringify(data);
}
console.log('请求拦截器',config.data);
return config;

})
//2、封装响应拦截器
axios.interceptors.response.use(
    
    (response)=>{
        NProgress.done()
        console.log('响应拦截器---成功')
        // console.log(response.data)
        return response.data;
    },
    (err)=>{
        NProgress.done()
        //输入函数体
        console.log('响应拦截失败---失败',err.message)
        
        //通过antd 在响应拦截器中统一处理错误 
        message.error('请求失败，请联系管理员');
    

      //如果故意将请求地址写错，那么axios就会返回一个undefined,一个非Promies实例，会走成功的回调，想让他走失败的回调，
      //要么返回一个失败的Promise实例，要么就返回一个pendding状态的Promise实例中断Promise链。
      return new Promise(()=>{})
    }
)


export default axios;