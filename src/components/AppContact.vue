<script setup>
    import Title2 from './componentsItems/Title2.vue';
    import emailjs from 'emailjs-com';
    import { ref } from 'vue'; 

    const user = {
        lastname: '',
        firstname: '',
        email: '',
        object: '',
        message: '',
    };

    const error = ref(false);


    const sendMail= (e) =>{
        if(user.lastname.length < 1 || user.firstname.length < 1 || user.email.length < 1 || user.object.length < 1 || user.message.length < 1){
            error.value = true;
        }else{
        emailjs.sendForm('service_sker7pi', 'template_6391522', e.target, 'iATGYypLhXjZcGLpS', {
          name: user.lastname,
          firstname:user.firstname,
          email: user.email,
          object:user.object,
          message: user.message
        })
        alert("votre message est bien envoyé");}
        
        e.target.reset();
    }
 
</script>

<template>
    <div class="div__contact" id="contact">
        <Title2 msg="Contact"/>
        <div class="div__message__error" v-if="error">
            <div class="message__error">
                <span class="item__error">X</span>
                <span>Veuillez remplir tous les champs</span>
                <span class="item__error">X</span>
            </div>
        </div>
        <div class="div__form">
            <form action="#"  method="post" id="contact" class="form" @submit.prevent="sendMail" >
                <input v-model="user.lastname" id="lastname" placeholder="Nom" name="lastname" class="lastname">
                <input v-model.trim="user.firstname" id="firstname" placeholder="Prénom" name="firstname" class="firstname">
                <input v-model.trim="user.email" id="email" placeholder="Email" name="mail" class="email" >
                <input v-model.trim="user.object" id="object" placeholder="Objet" name="object" class="object">
                <textarea v-model.trim="user.message" id="message" placeholder="Message" name="message" class="message"></textarea>
                <button type="submit" class="button" >Envoyer</button>
            </form>
        </div>    
    </div>
</template>

<style>

    .div__contact{
        padding: 20px;
    }

    .div__form{
        margin: 50px 0;
        display: flex;
        justify-content: center;
    }

    .form{
        width: 600px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(6, 40px);
        gap: 10px;
                
    }
 
    input{
        border-radius: 10px;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
        
    }



    .lastname{
        grid-column: 1/2;
        grid-row:1 ;
    }

    .firstname{
        grid-column: 2/3;
        grid-row: 1;
    }

    .email{
       grid-column: 1/3;
       grid-row: 2;
    }

    .object{
        grid-column: 1/3;
        grid-row: 3;
    }

    .message{
        grid-column: 1/3;
        grid-row: 4/6;
        border-radius: 10px;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    }

    .button{
        grid-column: 2/3;
        grid-row: 6;
        border-radius: 10px;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    }

    .div__message__error{
        display: flex;
        justify-content: center;
    }

    .message__error{
       border: 1px solid black;
       border-radius: 10px;
       width: 500px;
       display: flex;
       justify-content:space-evenly;
       background-color: rgba(213, 14, 14, 0.734);
       font-family: 'Jura';
       color: rgba(29, 249, 0, 0.9);
    }

    .item__error{
        border: 2px solid black;
        border-radius: 20%;
        font-family: "Robot";
    }
</style>