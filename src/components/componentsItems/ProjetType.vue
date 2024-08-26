<script setup>
 defineProps({
  title: {
    type: String
  },
  description: {
    type: String
  },
  date: {
    type: String
  }
})
</script>

<template>
    <div>
        <h3>
            {{ title }}
        </h3>
        <span>
            {{ description }}
        </span>
        <slot>
        </slot>
        <span>
            {{ date }}
        </span>

    </div>
</template>

<style scoped>
    span{
        display: block;
    }
</style>