<script setup>
       import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="navbar">
        <router-link to="/" ><img src="../assets/img/Image1.png" alt="Un gentil alien qui nous salut avec une secoupe volante dans la main" class="image"></router-link>
        <div class="nav__div">
            <ul class="nav__links">
                <li ><router-link to="/#about">Présentation</router-link></li>
                <li><router-link to="/#projet">Projets</router-link></li>
                <li><router-link to="/#contact">Contact</router-link></li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>

.navbar{
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding: 20px 50px;
    justify-content: space-between;
    align-items: center;
    border: 1px solid whitesmoke;
    border-radius: 10px;
    box-shadow:5px 5px 5px rgba(0, 0, 0, 0.5),
    -10px -10px 10px white;
}

.image{
    position:fixed;
    top: 20px;
    left: 50px;
    width:75px;
    border: solid 1px white;
    border-radius: 50%;
    box-shadow:5px 5px 5px rgba(0, 0, 0, 0.5),
    -10px -10px 10px white;
}


.nav__links{
    display: flex;
    list-style: none;
    border: 1px solid whitesmoke;  
}


li{
    padding: 0 20px;
}

a{
    text-decoration: none;
    color: black;
    font-family: 'Jura';
    font-size: 1.5rem;
    font-weight: 600;
}


a::after{
    content: "";
    display: block;
    margin: auto;
    width: 0;
    height: 1px;
    background: transparent;
    transition: width 0.4s;
}

a:hover::after{
    width: 100%;
    background-color:black ;
}


 
@media screen and (max-width:650px) {
    
    .navbar{
        padding: 0;
    }

    .image{
        border: solid 1px rgba(181, 27, 27, 0.379);
        box-shadow:5px 5px 5px rgba(0, 0, 0, 0.5),
        -10px -10px 10px white;
    }

    .nav__div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 20px;
        width: 100%;
    }

    .nav__links{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
    }
    
    li{
        margin-bottom: 20px;
    }
    
}
   
</style>