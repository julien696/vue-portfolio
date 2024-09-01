<script setup>

const props = defineProps(['showModal', 'toggleModal','projects'])

  
</script>

<template>
    <div class="modal__container" v-if="showModal">
        <div class="overlay__modal__container" @click="toggleModal" >
            <div  class="modal">
                <button class="btn__modal">
                    X
                </button>
                <div>
                <p v-for="project in projects">
                titre : {{ project.title }} <br/>
                technologies utilisées : {{ project.technology }}<br/>
                date de création : {{ project.date }} <br/>
                lien : <a href="https://github.com/julien696" target="_blank">{{ project.url }}</a> <br/><br>
                </p>
                </div>
            </div>           
        </div>
    </div>
</template>

<style scoped>
     .modal__container{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vw;
        
    }

    .overlay__modal__container{
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(51, 51, 51, 0.6);
        
    }

    .overlay__modal__container:hover{
        cursor: zoom-out;
    }

    .modal{
        width: 450px;
        max-height: 300px;
        box-sizing: border-box;
        padding: 30px 0 10px 30px;
        background-color: whitesmoke;
        border-radius: 20px;
        position: fixed;
        top: 35%;
        left: 30%;
        font-family: 'Jura';
        font-weight: 600;
        overflow-y: scroll;
        overflow-wrap: break-word;
    }

    .btn__modal{
      background-color: red;

    }

    @media screen and (max-width:750px){
        .modal{
            left: 10%;
            width: 320px;
        }
    }
</style>