<template>
  <div class="min-h-screen bg-gray-100">
    <NavBar />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
</script> 