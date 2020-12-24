/*
 * @Descripttion: 
 * @version: 
 * @Author: pengheyan
 * @Date: 2020-12-22 16:08:48
 * @LastEditors: pengheyan
 * @LastEditTime: 2020-12-23 14:57:23
 */
//请求接口地址
let BASE_ADDRESS = ''

//根据当前环境对地址进行配置
if(process.env.NODE_ENV=="development"){
  BASE_ADDRESS = 'http://192.168.154.63:9081/tp_platform_view_jn/'
}else if(process.env.NODE_ENV == 'test'){
  BASE_ADDRESS = 'http://124.204.76.214:21194/tp_platform_view_jn/'
}else{
  BASE_ADDRESS = 'http://192.168.154.63:9081/tp_platform_view_jn/'
}


//例子
const LOAD_LIST = BASE_ADDRESS + 'convoy/listConvoyData';

export default {
  LOAD_LIST
}
