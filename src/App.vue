<script setup>
import { RouterView } from 'vue-router'
import AppHeader from '../src/components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue';
</script>

<template>

  <header>
    <AppHeader />
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <AppFooter />
  </footer>
  
</template>

<style scoped>

</style>
