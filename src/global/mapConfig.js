/*
 * @Descripttion: 
 * @version: 
 * @Author: pengheyan
 * @Date: 2020-12-22 16:09:15
 * @LastEditors: pengheyan
 * @LastEditTime: 2020-12-23 10:55:29
 */
//开发环境地址
const devUrl = "https://minedata.cn"
//生产环境地址
const proUrl = "https://minedata.cn"

//开发环境地图配置
const devOptions = {
  appKey: '5a318e0c4d0f41ddb2c9f9af8002fdba',
  solution: 12877,
  accessToken: '16be596e00c44c86bb1569cb53424dc9',
  domainUrl: devUrl,
  dataDomainUrl: '//datahive.minedata.cn',
  serviceUrl: devUrl + '/service',
  styleUrl: devUrl + '/service/solu/style/id/12877',
  spriteUrl: devUrl + "/minemapapi/v2.0.0/sprite/sprite",
  center: [117.024967066, 36.6827847272],
  zoom: 10.7,
  pitch: 0,
  minZoom: 3,
  maxZoom: 17,
}

//生产环境地图配置
const proOptions = {
  appKey: '5a318e0c4d0f41ddb2c9f9af8002fdba',
  solution: 12877,
  accessToken: '16be596e00c44c86bb1569cb53424dc9',
  dataDomainUrl: '//datahive.minedata.cn',
  domainUrl: proUrl,
  serviceUrl: proUrl + '/service',
  styleUrl: proUrl + '/service/solu/style/id/12877',
  spriteUrl: proUrl + "/minemapapi/v2.0.0/sprite/sprite",
  center: [117.024967066, 36.6827847272],
  zoom: 10.7,
  pitch: 0,
  minZoom: 3,
  maxZoom: 17,
}

module.exports = process.env.NODE_ENV === 'production' ? proOptions : devOptions;