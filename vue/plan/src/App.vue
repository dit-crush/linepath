<!-- src/App.vue -->
<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <HeroSection />
    <FeaturesSection />
    <CTASection />
    <FooterSection />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import CTASection from './components/CTASection.vue'
import FooterSection from './components/FooterSection.vue'
</script>
