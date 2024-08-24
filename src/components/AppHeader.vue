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
    box-sizing: content-box;
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
}

.nav_links ul a li{
    color: black;
    font-family: 'Jura';
    font-size: 1.5rem;
    font-weight: bold;
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
   
   
</style>