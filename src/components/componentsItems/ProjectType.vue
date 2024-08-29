<script setup>

</script>

<template>
  
</template>

<style scoped>
    .project__type{
        width: 33%;
        display: flex;
        flex-direction: column;
        padding: 20px;
        margin: 10px;
        box-sizing: border-box;
        border: solid 1px black;
        
    }

    .title__project{
        font-family: 'Robot';
        text-decoration: underline;


    }
    span{
        display: block;
        font-family: 'Jura';
        font-weight: 600;
    }

    .project__type:hover{
        box-shadow:12px 12px 12px rgba(0, 0, 0, 0.5);
    }
    
    @media screen and (max-width: 650px){
        .project__type{
          width: 100%;
        }
    }
        
</style>