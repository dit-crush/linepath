<template>
  <div>
    <h1>百度地图示例</h1>
    <div id="mapContainer" style="width: 100%; height: 500px;"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 动态创建 script 标签加载百度地图 API
  const script = document.createElement('script')
  script.src = 'https://api.map.baidu.com/api?v=3.0&ak=vhtwg9Athwh5vMVSMbBfDLZfxG169b5q&callback=initMap'
  script.async = true
  document.body.appendChild(script)

  // 在全局定义初始化函数，百度地图 API 会调用它
  window.initMap = function() {
    // 创建地图实例
    const map = new BMap.Map('mapContainer')
    const point = new BMap.Point(116.404, 39.915) // 北京
    map.centerAndZoom(point, 12)
    map.enableScrollWheelZoom(true)

    // 添加一个标记点
    const marker = new BMap.Marker(point)
    map.addOverlay(marker)

    // 信息窗口
    const infoWindow = new BMap.InfoWindow('这里是北京')
    marker.addEventListener('click', () => map.openInfoWindow(infoWindow, point))
  }
})
</script>

<style scoped>
#mapContainer {
  border: 1px solid #ccc;
}
</style>
