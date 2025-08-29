<!-- src/components/CTASection.vue -->
<template>
  <section class="bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-20 px-6 text-center">
    <h2 class="text-4xl font-bold mb-6">立即开始你的训练</h2>
    <p class="text-lg mb-8">用科学管理，让每一次训练都有价值</p>
    <button class="bg-white text-blue-600 font-bold px-10 py-4 rounded-full shadow-lg hover:scale-105 transition transform" @click="startTraining">
      注册并开始
    </button>
  </section>
</template>

<script setup>
const startTraining = () => {
  alert('跳转到注册页面')
}
</script>
