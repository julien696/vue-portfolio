<script setup>
       import { RouterLink } from 'vue-router'
       
</script>

<template>
    <header>
        <router-link to="/" ><img src="../assets/img/Image1.png" alt="Un gentil alien qui nous salut avec une secoupe volante dans la main" class="image"></router-link>
    <nav class="navbar">
        <div class="nav__div">
            <ul class="nav__links">
                <li ><router-link to="/#about" id="about__link">Présentation</router-link></li>
                <li><router-link to="/#project" id="project__link">Projets</router-link></li>
                <li><router-link to="/#contact" id="contact__link">Contact</router-link></li>
            </ul>
        </div>
    </nav>
</header>
</template>

<style scoped>
header{
    position: fixed;
    right: 50px;
    top: 10px;
}

.navbar{
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    border: 1px solid whitesmoke;
    border-radius: 20px;
    box-shadow:5px 5px 5px rgba(0, 0, 0, 0.5),
    -10px -10px 10px white;
    background-color: whitesmoke;    
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
    padding: 0px;  
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

.image:hover{
    transform:scale(1.2);
}
 
@media screen and (max-width:900px) {
   header{
    position:absolute;
    top: 20px;
   }
    .navbar{
        padding: 0; 
    }

    .image{
        border: solid 1px rgba(29, 249, 0, 0.9);
        box-shadow:5px 5px 5px rgba(0, 0, 0, 0.5),
        -10px -10px 10px white;
        width: 48px;
    }



    .nav__links{
        margin-bottom: 0px;
        border: none;
    }
    
    li{
        padding: 0 10px;
        margin-bottom: 10px;
    }

    a{
        font-size: 1rem;
    }
}
   
</style>