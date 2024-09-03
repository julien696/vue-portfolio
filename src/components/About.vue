<script setup>
  import Titre2 from '@/components/componentsItems/Title2.vue';
</script>

<template>
    <section id="about" class="about">
      <h1>Hello world</h1>
      <div >
        <Titre2 msg="Présentation" />
        <p>
          Coucou, moi c'est Julien chauvin, développeur web débutant en formation au CEF depuis avril 2024.
          J'ai plaisir à vous présenter mes premiers projets.        
        </p>
        <div class="technology">
          <h3 class="title3">
            Technologies utilisées:
          </h3>
          <div class="technology__img"> 
            <img src="../assets/img/html.png" alt="logo HTML">
            <img src="../assets/img/css.png" alt="logo CSS">
            <img src="../assets/img/js.png" alt="Logo Js">
            <img src="../assets/img/git.png" alt="Logo Git">
            <img src="../assets/img/github.png" alt="Logo Github">
            <img src="../assets/img/logo.svg" alt="Logo Vuejs" style="width: 48px;">
          </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
  .about{
       padding: 20px;
    }

  h1{
        font-family: 'Robot';
        font-size: 2.5rem;
        padding: 2.5rem 0;
        text-shadow: 5px 5px 5px rgb(200, 200, 200);     
    }
  
  p{
        padding: 0 20px;
        font-family: 'Jura';
        font-weight: 600;
        width:50%;
    }

  .technology{
    padding-top: 20px;
  }

  .technology__img{
    width: 50%;
    display: flex;
    justify-content: space-evenly;
  }

  .title3{
    font-family:"Robot";
    }

    @media screen and (max-width:900px) {
      h1{
        font-size: 1.7rem;
      }

      p{
        font-size: 0.8rem;
      }
    }

</style>