<template>
  <nav>
    <router-link to="/">Головна</router-link> |
    <router-link to="/shop">Магазин</router-link> |
    <router-link to="/pay">Оплата</router-link> |
    <router-link to="/contact">Контакти</router-link>


  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
button{
    background-color:#42b983;
    color: black;
    font-weight: 600;
}
a{
    text-decoration: none;
    color: black;
    font-weight: 600;
}
</style>
