<template>
    <div class="div__footer">
        <div class="div__social">
            <a href="https://github.com/julien696" target="_blank">
                <img src="../assets/img/github.png" alt="logo de github" class="social__logo">
            </a>
            <a href="https://fr.linkedin.com/" target="_blank">
                <img src="../assets/img/linkedin.png" alt="logo de linkedin" class="social__logo">
            </a>
            <a href="https://x.com/" target="_blank">
                <img src="../assets/img/x.jpg" alt="logo de x" class="social__logo">
            </a>
        </div>
        <div class="div__time">
            <span class="span__footer"><small>© Derniére mise à jour <time datetime="2024-09-09">9 septembre 2024</time></small></span>
        </div>
    </div>
</template>

<style scoped>
.div__footer{
    border: 1px solid whitesmoke;
    border-radius: 10px;
    background-color: rgba(211, 211, 211, 0.5);
    box-shadow: -5px -5px 5px rgba(0, 0, 0, 0.5),
    10px 10px 10px white;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.div__social{
    margin: 10px;
}

.social__logo{
    margin: 10px;
    border-radius: 20%;
    box-shadow:5px 5px 5px rgba(0, 0, 0, 0.5),
    -10px -10px 10px white;
}

.span__footer{
    font-family: "Jura";
    font-weight: 600;
}
</style>