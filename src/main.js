/*
 * @Descripttion: 
 * @version: 
 * @Author: pengheyan
 * @Date: 2020-12-22 15:46:58
 * @LastEditors: pengheyan
 * @LastEditTime: 2020-12-24 14:11:55
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入Element-ui
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

//重置浏览器以及地图默认样式
import 'assets/scss/reset.scss'

//引入li-flexible
import './util/rem'

//导入封装的api接口
import api from './axios/api/api';

Vue.config.productionTip = false

Vue.prototype.$api = api;//将api挂载到vue的原型上

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
