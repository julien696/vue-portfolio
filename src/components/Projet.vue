<script setup>
    import Titre2 from './componentsItems/Titre2.vue';
</script>

<template>
    <div id="projet" class="div__projet">
        <Titre2 msg="Projets" />
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