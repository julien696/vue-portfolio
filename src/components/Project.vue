<script setup>
    import Title2 from './componentsItems/Title2.vue';
    import ProjectType from './componentsItems/ProjectType.vue';
    import { dataProjects } from '@/store/dataProjects';

    const store = dataProjects();
    console.log(store.projects[0].title);

</script>

<template>
    <div id="project" class="div__project" >
        <Title2 msg="Projets" />     
        <div>
          
        </div>
    </div>

</template>

<style scoped>
    .div__project{
        padding: 20px;
    }

    .div__project-type{
        display: flex;
        flex-direction: row;
        padding: 20px;
    }


    @media screen and (max-width: 650px){
        .div__project-type{
            display: flex;
            flex-direction: column;
        }
    }
        
</style>