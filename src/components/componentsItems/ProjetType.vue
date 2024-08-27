<script setup>
 defineProps({
    titreProjet:{
        type: String
    }
})
</script>

<template>
    <div class="projet__type">
        <h3 class="titre__projet">{{ titreProjet }}</h3>
        <img src="">
    </div>
</template>

<style scoped>
    .projet__type{
        width: 33%;
        display: flex;
        flex-direction: column;
        padding: 20px;
        margin: 10px;
        box-sizing: border-box;
        border: solid 1px black;
        
    }

    .titre__projet{
        font-family: 'Robot';
        text-decoration: underline;


    }
    span{
        display: block;
        font-family: 'Jura';
        font-weight: 600;
    }

    .projet__type:hover{
        box-shadow:12px 12px 12px rgba(0, 0, 0, 0.5);
    }
    
    @media screen and (max-width: 650px){
        .projet__type{
          width: 100%;
        }
    }
        
</style>