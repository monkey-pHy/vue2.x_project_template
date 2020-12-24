<!--
 * @Descripttion: 
 * @version: 
 * @Author: pengheyan
 * @Date: 2020-12-22 15:53:45
 * @LastEditors: pengheyan
 * @LastEditTime: 2020-12-24 14:09:41
-->
<template>
  <div class="map-home-wrap">
  <div
    id="mapContent"
  ></div>
  </div>
</template>
<script>
import mapConfig from "global/mapConfig";
import urlConfig from 'global/urlConfig';
export default {
  name: "MapHome",
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    let that = this;
    that.loadMap();
    that.loadList();
  },
  methods: {
    loadMap() {
      let that = this;
      minemap.domainUrl = mapConfig.dataDomainUrl;
      minemap.dataDomainUrl = mapConfig.dataDomainUrl;
      minemap.spriteUrl = mapConfig.spriteUrl;
      minemap.serverUrl = mapConfig.serviceUrl;
      minemap.accessToken = mapConfig.accessToken;
      minemap.solution = mapConfig.solution;

      that.map = new minemap.Map({
        container: "mapContent",
        style: mapConfig.styleUrl,
        center: mapConfig.center,
        zoom: mapConfig.zoom,
        pitch: mapConfig.pitch,
        maxZoom: mapConfig.maxZoom,
        minZoom: mapConfig.minZoom,
        logoControl: false,
      });
    },
    loadList(){
      let that = this;
      let params = {
        status:'2,3'
      }
      // that.$axios.loadList(params).then((res)=>{
      //   console.log('res.data', res.data);
      // })
      that.$api.login.loadList(params).then((res)=>{
        console.log('res',res.data);
      })
    }
  },
};
</script>
<style scoped lang="scss">
.map-home-wrap {
  width: 100%;
  height: 100%;
  position: absolute;
  #mapContent{
    width: 100%;
    height: 100%;
    z-index: 1;
  }
}
</style>