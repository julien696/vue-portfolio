<script setup>
    import Titre2 from './componentsItems/Titre2.vue';
    import ProjetType from './componentsItems/ProjetType.vue';
</script>

<template>
    <div id="project">
        <Titre2 msg="Projets" />
        <div class="div__project">
            <ProjetType title="Cv en html et css" description="CV réalisé en html et css" techno="Les technologies utilisés sont le html, le css, et le versioning est réalisé avec git et github">
                <img src="../assets/img/image-cv.png" alt="image du premier projet représentant un cv" class="img__class">
                <br />
                <span class="date">date de création <time datetime="2024/06/23">23/06/2024</time></span>    
            </ProjetType>
            <ProjetType title="CDC La Socketterie " description="Cahier des charges pour l'entreprise la socketterie" techno="Ce cahier est réalisé grâce au logiciel World, les maquettes sont réalisées avec Figma,
                l'arborescence du site est réalisé sur Octopus.do.">
                <img src="../assets/img/image-cdc.png" alt="Page de présentation du cahier des charges pour la Socketterie" class="img__class">
                <br />
                <span class="date">date de création <time datetime="2024/07/09">09/07/2024</time></span>
            </ProjetType>
            <ProjetType title="Dynamiser un espace de commentaire" description="Ajout d'un commentaire" techno="les technologies utilisées sont le javaScript
                et git et github pour la gestion de  version">
                <img src="../assets/img/image-espace-com.png" alt="capture d'écran de l'espace commentaire comprennant deux commentaire ainsi qu'un formulaire" class="img__class">
                <br/>
                <span class="date">date de création <time datetime="2024/08/12">12/08/2024</time></span>
            </ProjetType>
        </div>
    </div>
</template>

<style scoped>
    .div__project{
        display: flex;
        flex-direction: row;
        padding: 20px;
    }

    .img__class{
        width:200px;
    }

    .date{
        font-family: 'Jura';
        font-weight: 600;
    }

    @media screen and (max-width: 650px){
        .div__project{
            display: flex;
            flex-direction: column;
        }
    }
        
</style>