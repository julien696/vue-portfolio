<script setup>
    import Title2 from './componentsItems/Title2.vue';
</script>

<template>
    <div class="div__contact" id="contact">
        <Title2 msg="Contact"/>
        <div class="div__form">
            <form action="mailto:julienchauvin@hotmail.fr" id="contact" class="form">
                <input type="text" id="lastname" placeholder="Nom" name="lastname" class="lastname">
                <input type="text" id="firstname" placeholder="Prénom" name="firstname" class="firstname">
                <input type="email" id="email" placeholder="Email" name="mail" class="email" >
                <input type="text" id="object" placeholder="Objet" name="object" class="object">
                <textarea id="message" placeholder="Message" name="message" class="message"></textarea>
                <button type="submit" class="button">Envoyer</button>
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
</style>