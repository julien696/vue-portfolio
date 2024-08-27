<script setup>
    import Titre2 from './componentsItems/Titre2.vue';
    import ProjetType from './componentsItems/ProjetType.vue';
</script>

<template>
    <div id="projet" class="div__projet">
        <Titre2 msg="Projets" />
        <div class="div__projet-type">
           <ProjetType titre-projet="CV en ligne"></ProjetType>
           <ProjetType titre-projet="Cahier des charges La Socketterie"></ProjetType>
           <ProjetType titre-projet="Dynamiser un espace commentaire"></ProjetType>
        </div>
    </div>
</template>

<style scoped>
    .div__projet{
        padding: 20px;
    }

    .div__projet-type{
        display: flex;
        flex-direction: row;
        padding: 20px;
    }


    @media screen and (max-width: 650px){
        .div__projet-type{
            display: flex;
            flex-direction: column;
        }
    }
        
</style>