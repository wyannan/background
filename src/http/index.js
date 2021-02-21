// axios相关的
import axios from 'axios'


//export default function (config) config用户传进来的参数（数据 配置项）

// 用户传的配置项与做好的默认配置项进行合并
export default function (config) {
    //可以做一些axios 拦截 全局配置

    // 创建axios实例
    const instance = axios.create({
        // 基础url
        baseURL: '/api',
        // 超出时长
        // timeout: 1000,
       
    });
    

    // 添加请求拦截器
    instance.interceptors.request.use(function (config) {
        // 在发送请求之前做些什么
        console.log(config);
        // if是登录的话 return config 否则把token值加入到请求头中
        if (config.url == "/login") return config;
        config.headers['token'] = sessionStorage.getItem('token')
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });
 
    // 添加响应拦截器
    instance.interceptors.response.use(function (response) {
        // 对响应数据做点什么
        return response.data;
    }, function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    });


    // 因为外界要拿到请求结果 所有要把创建的实例对象return出去
    return instance(config)
}