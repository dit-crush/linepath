<template>
  <div>
    <h1>百度地图示例</h1>
    <div id="mapContainer" style="width: 100%; height: 500px;"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://api.map.baidu.com/api?v=3.0&ak=vhtwg9Athwh5vMVSMbBfDLZfxG169b5q'
  document.body.appendChild(script)
  script.onload = () => {
    const map = new BMap.Map('mapContainer')
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 12)  // 北京中心
    map.enableScrollWheelZoom(true)  // 开启滚轮缩放
  }
})
</script>

<style scoped>
#mapContainer {
  border: 1px solid #ccc;
}
</style>
