<script setup>
    import Title2 from './componentsItems/Title2.vue';
    import { ref } from 'vue';
    import ProjectModal from './ProjectModal.vue';

    const projects = [
        {   
            id: 1,
            title: 'CV en ligne',
            imageSrc: 'src/assets/img/image-cv.PNG',
            imageAlt: 'cv en ligne de Julien Chauvin',
            date: '25 juin 2024',
            technology: ["HTML","CSS"],
            url: 'https://github.com/julien696/CV',
        },

        {
            id: 2,
            title: 'Cahier des charges La Socketterie',
            imageSrc: 'src/assets/img/image-cdc.png',
            imageAlt: 'page de présentation du cahier des charges pour La Socketterie',
            date: '15 juillet 2024',
            technology: ['Microsoft Word'],
            url: 'https://github.com/julien696/CDC-La-Socketterie',
        },

        {
            id: 3,
            title: 'Dynamiser un espace commentaire',
            imageSrc: 'src/assets/img/image-espace-com.png',
            imageAlt: 'formulaire pour ajouter un commentaire', 
            date: '12 août 2024',
            technology: ['Javascript'],
            url: 'https://github.com/julien696/dynamiserUnEspaceDeCommentaires',
        },    
    ];

    const showModal = ref(false);

    const toggleModal = function(){
        showModal.value= !showModal.value
    };
   
</script>

<template>
    <section class="div">
        <Title2 msg="Projets" />     
        <div id="project" class="div__project" >
            <div v-for="project in projects" key="project" class="div__project__projects">
             
                <img :src="project.imageSrc" :alt="project.imageAlt" class="div__project__img" @click="toggleModal">
                <br /> 
                <br /> 
                <span class="div__project__title">
                    {{project.title }}
                </span>
            </div>
            <ProjectModal :projects="projects" v-bind:showModal="showModal" v-bind:toggleModal="toggleModal">
            </ProjectModal>
        </div>
    </section>
</template>

<style scoped>

    .div{
        padding: 20px;
        margin-bottom: 20px ;        
    }

    .div__project{
        display: flex;
        box-sizing: border-box;
        padding-top: 20px;
    }

    .div__project__projects{
        box-sizing: border-box;
        margin: auto;
        max-width: 30%;        
    }

    .div__project__img{
        width: 300px;
        border-radius: 20px;
        height: 400px;    
    }

    .div__project__img:hover{
        box-shadow:10px 10px 10px rgba(0, 0, 0, 0.9);
        cursor:zoom-in;                         
    }

    .div__project__title{
        font-family: 'Jura';
        font-weight: 600;
    }

    @media screen and (max-width:1000px) {
        .div__project{
            display: flex;
            flex-direction:column ;
            align-items: center;
        }
        .div__project__projects{
            max-width: 100vh;
            margin: 10px;
        }
    }

/*-------------partie du modal------------- */

        
</style>