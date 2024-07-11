<script setup>
import { RouterLink } from 'vue-router';

</script>
<template>
    <nav>
        <ul>
            <li>
                <RouterLink to="/">Accueil</RouterLink>
            </li>
            <li>
                <RouterLink to="/employees">Employées</RouterLink>
            </li>
            <li>
                <RouterLink to="/candidates">Candidats</RouterLink>
            </li>
        </ul>
    </nav>

</template>
<style scoped>
nav {
    display: flex;
    justify-content: center;
    background-color: #333;
    color: white;
}

ul {
    width: 30%;
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 0;
    margin: 0;
}

li {
    width: 100%;
    text-align: center;
}

a {
    height: 70px;
    display: block;
    color: white;
    text-decoration: none;
    line-height: 70px;
    transition: all 0.2s ease;
}

a:hover {
    background-color: #555;
}

</style>