<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from '../src/components/AppHeader.vue'
</script>

<template>
  <header>
    <AppHeader />
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/Page404">Page404</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>

</style>
