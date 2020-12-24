/*
 * @Descripttion: 
 * @version: 
 * @Author: pengheyan
 * @Date: 2020-12-22 16:03:47
 * @LastEditors: pengheyan
 * @LastEditTime: 2020-12-24 13:30:35
 */
const px2rem = require('postcss-px2rem');
const cssPlugin = px2rem({
  remUnit: 16 //基准大小 baseSize，需要和rem.js中相同
});
const {
  proUrl,
  devUrl
} = require('./src/global/mapConfig');
module.exports = {
  //基本路径
  publicPath: '/',
  lintOnSave: false, // 是否开启eslint保存检测，有效值：ture | false | 'error'
  outputDir: 'dirst', //输出文件目录

  css: {
    loaderOptions: { // css预设器配置项
      postcss: {
        plugins: [
          cssPlugin
        ]
      }
    }
  },
  configureWebpack: {
    name: process.env.NODE_ENV === 'production' ? proUrl : devUrl
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    // name: name,
    // resolve: {
    //     alias: {
    //         '@': resolve('src')
    //     }
    // }
  },
}
