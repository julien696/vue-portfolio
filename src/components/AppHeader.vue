<script setup>

</script>

<template>
 
        <nav class="navbar">
            <router-link to="/" ><img src="../assets/img/Image1.png" alt="Un gentil alien qui nous salut avec une secoupe volante dans la main" class="image"></router-link>
            <div class="nav_links">
                <ul>
                    <router-link><li>Présentation</li></router-link>
                    <router-link><li>Projets</li></router-link>
                    <router-link><li>contact</li></router-link>
                </ul>
            </div>
        </nav>
  

</template>

<style scoped>

    .image{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border:2px, solid, black;
        object-fit: cover;
        background-image: linear-gradient(0deg, rgba(99, 109, 81, 0.3) 0%,rgba(198, 203, 94, 0.3) 100%),linear-gradient(90deg, rgb(52,175,180),rgb(39,137,70));;;
    }

    .navbar{
        display: flex;
        flex-direction: row;
        margin:20px 50px;
        justify-content:space-between;
        align-items: center;
    }

    .navbar .nav_links ul{
        display: flex;
    }

    .navbar .nav_links ul li{
        margin: 0px 10px;
    }

</style>