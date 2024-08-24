<script setup>

</script>

<template>
        <nav class="navbar">
            <router-link to="/" ><img src="../assets/img/Image1.png" alt="Un gentil alien qui nous salut avec une secoupe volante dans la main" class="image"></router-link>
            <div class="nav_links">
                <ul>
                    <router-link><li>Présentation</li></router-link>
                    <router-link><li>Projets</li></router-link>
                    <router-link><li>Contact</li></router-link>
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
    width:100px;
    border: solid 1px white;
    border-radius: 50%;
}


.nav_links ul{
    display: flex;
    list-style: none;
}

.nav_links ul a{
    text-decoration: none;
} 

.nav_links ul a li{
    color: black;
    font-family: 'Jura';
    font-size: 1.5rem;
    font-weight: 600;
    margin:0 20px;
}

.nav_links ul a li::after{
    content: "";
    display: block;
    margin: auto;
    width: 0;
    height: 1px;
    background: transparent;
    transition: width 0.4s;
}

.nav_links ul a li:active::after{
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

    .nav_links{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 20px;
        background-color: rgba(181, 27, 27, 0.379);
        width: 100%;
        height: 100vh;
    }

    .nav_links ul{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
    }
    
    .nav_links ul a li{
        margin-bottom: 20px;
    }
    
}
   
</style>