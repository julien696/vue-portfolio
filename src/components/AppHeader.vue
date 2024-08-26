<script setup>

</script>

<template>
        <nav class="navbar">
            <router-link to="/" ><img src="../assets/img/Image1.png" alt="Un gentil alien qui nous salut avec une secoupe volante dans la main" class="image"></router-link>
            <div class="nav__div">
                <ul class="nav__links">
                    <router-link to="/#about"><li>Présentation</li></router-link>
                    <router-link to="/#project"><li>Projets</li></router-link>
                    <router-link to="/#contact"><li>Contact</li></router-link>
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
}

.image{
    position:fixed;
    top: 20px;
    left: 50px;
    width:75px;
    border: solid 1px white;
    border-radius: 50%;
}


.nav__links{
    display: flex;
    list-style: none;
}

a{
    text-decoration: none;
} 

li{
    color: black;
    font-family: 'Jura';
    font-size: 1.5rem;
    font-weight: 600;
    margin:0 20px;
}

li::after{
    content: "";
    display: block;
    margin: auto;
    width: 0;
    height: 1px;
    background: transparent;
    transition: width 0.4s;
}

li:hover::after{
    width: 100%;
    background-color:black ;
}


 
@media screen and (max-width:650px) {
    
    .navbar{
        padding: 0;
    }

    .image{
        border: solid 1px rgba(181, 27, 27, 0.379);
    }

    .nav__div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 20px;
        background-color: rgba(181, 27, 27, 0.379);
        width: 100%;
        height: 100vh;
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