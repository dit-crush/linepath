<template>
  <div>
    <div id="mapContainer" style="width: 1600px; height: 700px;"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 动态加载百度地图 API
  const script = document.createElement('script')
  script.src = 'https://api.map.baidu.com/api?v=3.0&ak=vhtwg9Athwh5vMVSMbBfDLZfxG169b5q&callback=initMap'
  script.async = true
  document.body.appendChild(script)

  // 初始化函数（百度地图加载完成后会调用）
  window.initMap = function () {
    const map = new BMap.Map('mapContainer')

    // 通过城市名称定位（这里用南京）
    map.centerAndZoom("南京市", 13)
    map.enableScrollWheelZoom(true)

    // 假设我们要展示南京的一些景点
    const points = [
      {lng: 118.796877, lat: 32.060255, text: "夫子庙"},
      {lng: 118.849445, lat: 32.056905, text: "中山陵"},
      {lng: 118.802421, lat: 32.064652, text: "南京大学"},
      {lng: 118.792199, lat: 32.059312, text: "南京总统府"},
      {lng: 118.730411, lat: 32.117462, text: "南京长江大桥"}
    ]

    points.forEach(p => {
      const pt = new BMap.Point(p.lng, p.lat)
      const marker = new BMap.Marker(pt)
      map.addOverlay(marker)

      // 点击标记点时弹出信息窗口
      const infoWindow = new BMap.InfoWindow(p.text)
      marker.addEventListener('click', () => map.openInfoWindow(infoWindow, pt))
    })
  }
})
</script>

<style scoped>
#mapContainer {
  border: 1px solid #ccc;
}
</style>
