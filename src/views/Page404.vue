<script setup>

</script>

<template>
    <div class="error">
       <h2 class="error__title">
            404
       </h2>
       <span class="error__message">
            click sur bili
       </span>
    </div>
</template>

<style scoped>
    .error{
        max-width: 100vw;
        height: 900px;
        background-repeat:no-repeat;
        background-size: cover;
        background-position: right;
        background-image: url(../assets/img/image404.jpg);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }

    .error__title{
        margin: 0px;
        color: rgba(29, 249, 0, 0.9);
        letter-spacing: 1rem;
        font-size: 6rem;
        text-shadow: 10px -10px 10px black;
        font-family: 'Jura';
    }

    .error__message{
        color: rgba(29, 249, 0, 0.9);
        font-family: 'Jura';
        font-size: 2rem;
    }

    @media screen and (max-width:1200px) {
        .error{
            height: 100vw;
        }
    }
</style>
