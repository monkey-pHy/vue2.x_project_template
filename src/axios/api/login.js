/*
 * @Descripttion: 
 * @version: 
 * @Author: pengheyan
 * @Date: 2020-12-23 14:21:49
 * @LastEditors: pengheyan
 * @LastEditTime: 2020-12-23 15:44:27
 */
import axios from '../axios'
import urlConfig from '../../global/urlConfig'
import qs from 'qs'; //按需导入

const login = {
  //get请求例子
  loadList(params) {
    return axios.get(urlConfig.LOAD_LIST, {
      params: params
    });
  }
  //post请求例子
  //   login (params) {        
  //     return axios.post(`${base.sq}/accesstoken`, qs.stringify(params));    
  // }  
}

export default login;
