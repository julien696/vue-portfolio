<script setup>
  import Titre2 from '@/components/Titre2.vue';
</script>

<template>
  <div id="about" class="about">
    <h1>Hello world</h1>
    <div >
        <Titre2>
            Présentation
        </Titre2>
     <p>
        Coucou moi c'est Julien chauvin, développeur web débutant en formation au CEF depuis avril 2024. Malgrés ma jeune expérience
        j'ai déja une bonne matrise en html et css ainsi que des connaissance en javaScript. J'ai plaisir à vous présenter mes premiers
        projets.
     </p>
    </div>

  </div>
</template>

<style scoped>

    .about{
       padding: 20px;
    }

    h1{
        font-family: 'Robot';
        font-size: 2.5rem;
        padding: 2.5rem 0;
    }
    p{
        font-family: 'Jura';
        font-weight: 600;
        width:50%;
    }
</style>