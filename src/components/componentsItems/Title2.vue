<script setup>
defineProps({
  msg: String
})
</script>

<template>
   <h2>{{ msg }}</h2>
</template>

<style scoped>
    h2{
        font-family:'Robot';
        font-size: 1.7rem;
        text-shadow: 5px 5px 5px rgb(200, 200, 200);
    }

    @media screen and (max-width:900px){
      h2{
        font-size: 1.2rem;
      }
    }
</style>