<script setup>
    import Titre2 from './componentsItems/Titre2.vue';
    import ProjetType from './componentsItems/ProjetType.vue';
</script>

<template>
    <div class="div__project">
        <Titre2 msg="Projets" />
        <div>
            <ProjetType title="html" description="projet html" date="25/25/25d"><img src="../assets/img/alien-favicon.jpg" alt=""> </ProjetType>
            <ProjetType title="css" description="css projet" />
        </div>
    </div>
</template>

<style scoped>
    .div__project{
        padding: 20px;
    }
</style>