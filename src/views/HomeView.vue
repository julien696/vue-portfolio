<script setup>
  import About from '@/components/About.vue';
  import Project from '@/components/Project.vue';
  import AppForm from '@/components/AppContact.vue';

  let aboutLink = document.querySelector('#about__link');
  let projectLink = document.getElementById('project__link');
  let contactLink = document.querySelector('#contact__link');
  
  let underline = function (e) {
         e.style.textDecoration = "underline";
         e.style.textDecorationColor = "rgba(29, 249, 0, 0.9)"
     }

  let none =function(e) {
    e.style.textDecoration = "none"
  }

</script>

<template>
  
    <About @mouseover="underline(aboutLink)" @mouseleave="none(aboutLink)"/>
    <Project @mouseover="underline(projectLink)" @mouseleave="none(projectLink)"/>
    <AppForm @mouseover="underline(contactLink)" @mouseleave="none(contactLink)"/>
</template>
