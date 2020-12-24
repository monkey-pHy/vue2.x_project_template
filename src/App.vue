<!--
 * @Descripttion: 
 * @version: 
 * @Author: pengheyan
 * @Date: 2020-12-22 15:46:58
 * @LastEditors: pengheyan
 * @LastEditTime: 2020-12-24 11:31:19
-->
<template>
  <div id="app">
    <map-home></map-home>
    <login></login>
  </div>
</template>
<script>
import Login from './views/login/Login'
import MapHome from './views/MapHome';
export default {
  name:'App',
  components:{MapHome,Login}
}
</script>
<style lang="scss">
#app{
  width: 100%;
  height: 100%;
}
</style>
