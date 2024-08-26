<script setup>
  defineProps({
  msg: {
    type: String,
  }
})
</script>

<template>
   <h2>{{ msg }}</h2>
</template>

<style scoped>
    h2{
        font-family:'Robot';
        font-size: 1.7rem;
        text-decoration: underline;
    }
</style>