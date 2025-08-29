<!-- src/components/HeroSection.vue -->
<template>
  <section class="relative bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-32 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-5xl font-extrabold mb-4 animate-fadeIn">提升你的乒乓球技能</h1>
      <p class="text-xl mb-8 animate-fadeIn delay-300">智能管理训练计划，记录每一次进步</p>
      <button class="bg-white text-blue-600 font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition transform" @click="startTraining">
        开始训练
      </button>
    </div>
    <div class="absolute bottom-0 left-0 w-full">
      <svg viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,128L1440,288L1440,0L0,0Z"></path></svg>
    </div>
  </section>
</template>

<script setup>
const startTraining = () => {
  alert('跳转到训练计划页面')
}
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 1s forwards;
}
.animate-fadeIn.delay-300 {
  animation-delay: 0.3s;
}
</style>
