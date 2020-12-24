/*
 * @Descripttion: 
 * @version: 
 * @Author: pengheyan
 * @Date: 2020-12-22 16:03:47
 * @LastEditors: pengheyan
 * @LastEditTime: 2020-12-24 14:12:48
 */
//px2rem配置
const px2rem = require('postcss-px2rem');
const cssPlugin = px2rem({
  remUnit: 16 //基准大小 baseSize，需要和rem.js中相同
});
//map引用地址配置
const {
  proUrl,
  devUrl
} = require('./src/global/mapConfig');

//文件路径path配置
const path = require('path');

function resolve(dir){
  return path.join(__dirname,dir);
}

module.exports = {
  //基本路径
  publicPath: '/',
  lintOnSave: false, // 是否开启eslint保存检测，有效值：ture | false | 'error'
  outputDir: 'dirst', //输出文件目录
  chainWebpack:config=>{
    config.resolve.alias
    .set('@',resolve('scr'))
    .set("assets",resolve('src/assets'))
    .set('components',resolve('src/components'))
    .set('views',resolve('src/views'))
    .set('global',resolve('src/global'))
  },
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
